/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose, composeWithRelay } from '../schemaComposer';
import { ProductTC } from './product';

export const CategorySchema = new mongoose.Schema(
  {
    categoryID: {
      type: Number,
      description: 'Category unique ID',
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
    description: String,
  },
  {
    collection: 'db_categories',
  }
);

export const Category = mongoose.model('Category', CategorySchema);

export const CategoryTC = composeWithRelay(composeWithMongoose(Category));

CategoryTC.addRelation('productConnection', {
  resolver: () => ProductTC.getResolver('connection'),
  prepareArgs: {
    filter: source => ({ categoryID: source.categoryID }),
  },
  projection: { categoryID: true },
});

CategoryTC.addRelation('productList', {
  resolver: () => ProductTC.getResolver('findMany'),
  prepareArgs: {
    filter: source => ({ categoryID: source.categoryID }),
  },
  projection: { categoryID: true },
});
