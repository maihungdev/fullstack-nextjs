/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose, composeWithRelay } from '../schemaComposer';
import { ProductTC } from './product';

export const CategorySchema = new mongoose.Schema(
  {
    _id:{
      type: mongoose.Schema.Types.ObjectId
    },
    category_id:{
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    slug: {
      type: String,
      unique: true
    },
    image: {
      type: String,
    },
    parent_id: {
      type: String
    },
    enabled: Boolean,
  },
  {
    collection: 'db_categories',
  }
);

export const Category = mongoose.model('Category', CategorySchema);

export const CategoryTC = composeWithRelay(composeWithMongoose(Category));

CategoryTC.addRelation('product', {
  resolver: () => ProductTC.getResolver('findMany'),
  prepareArgs: {
    filter: source => ({ category_id: source.category_id }),
    skip: null,
    sort: null,
  },
  projection: { _id: true },
});
CategoryTC.addRelation('rootCategory', {
  resolver: () => CategoryTC.getResolver('findOne'),
  prepareArgs: {
    filter: source => ({ _id: source.parent_id }),
    skip: null,
    sort: null,
  },
  projection: { _id: true },
});