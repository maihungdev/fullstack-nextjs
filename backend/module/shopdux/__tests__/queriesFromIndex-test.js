/* @flow */

import { graphql } from 'graphql';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import MongodbMemoryServer from 'mongodb-memory-server';
import seed from '../data/seed';
import meta from '../index';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;
let con;
let db;
beforeAll(async () => {
  mongoServer = new MongodbMemoryServer({ instance: { dbName: 'shopdux' } });
  const mongoUri = await mongoServer.getConnectionString();
  const opts = { useNewUrlParser: true };
  mongoose.connect(
    mongoUri,
    opts
  );
  mongoose.connection.once('disconnected', () => {
    console.log('MongoDB disconnected!');
  });
  con = await MongoClient.connect(
    mongoUri,
    opts
  );
  db = con.db('shopdux');
  await seed(db);
  // take time to mongo create indexes if needed
  await new Promise(resolve => setTimeout(resolve, 3000));
});

afterAll(async () => {
  await mongoose.disconnect();
  con.close();
  mongoServer.stop();
});

it('check seed', async () => {
  expect((await db.listCollections().toArray()).map(o => o.name)).toEqual(
    expect.arrayContaining([
      'db_customers',
      'db_products',
      'db_regions',
      'db_orders',
      'db_employees',
      'db_categories',
      'db_shippers',
      'db_suppliers',
    ])
  );
});

describe('nortwind > queries', () => {
  meta.queries.forEach(({ query, title }) => {
    it(title, async () => {
      const result = await graphql(meta.schema, query);
      expect(result).toMatchSnapshot();
    });
  });
});
