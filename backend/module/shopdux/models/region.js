/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose, composeWithRelay } from '../schemaComposer';
import { EmployeeTC } from './employee';

export const TerritorySchema = mongoose.Schema(
  {
    territoryID: Number,
    name: String,
  },
  {
    _id: false,
  }
);

export const RegionSchema = new mongoose.Schema(
  {
    regionID: {
      type: Number,
      description: 'Region unique ID',
      unique: true,
    },
    name: String,
    territories: {
      type: [TerritorySchema],
    },
  },
  {
    collection: 'db_regions',
  }
);

export const Region = mongoose.model('Region', RegionSchema);

export const RegionTC = composeWithRelay(composeWithMongoose(Region));

RegionTC.addRelation('employees', {
  resolver: () => EmployeeTC.getResolver('findMany'),
  prepareArgs: {
    filter: source => ({
      _operators: {
        territoryIDs: {
          in: source.territories.map(t => t.territoryID) || [],
        },
      },
    }),
  },
  projection: { territories: { territoryID: true } },
});
