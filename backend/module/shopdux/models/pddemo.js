/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose, composeWithRelay } from '../schemaComposer';
import { OrderTC } from './order';
import { SupplierTC } from './supplier';
import { CategoryTC } from './category';

export const ProductSchema = new mongoose.Schema(
  {
    productID: {
      type: Number,
      description: 'Unique product id',
      unique: true,
    },
    name: String,
    supplierID: Number,
    categoryID: Number,
    quantityPerUnit: String,
    unitPrice: {
      type: Number,
      index: true,
    },
    unitsInStock: Number,
    unitsOnOrder: Number,
    reorderLevel: Number,
    discontinued: Boolean,
  },
  {
    collection: 'db_products',
  }
);

ProductSchema.index({ name: 1, supplierID: 1 }, { unique: true });

export const Product = mongoose.model('Product', ProductSchema);

export const ProductTCdemo = composeWithRelay(composeWithMongoose(Product));

const extendedResolver = ProductTCdemo.getResolver('findMany').addFilterArg({
  name: 'nameRegexp',
  type: 'String',
  description: 'Search by regExp',
  query: (query, value) => {
    query.name = new RegExp(value, 'i'); // eslint-disable-line
  },
});
extendedResolver.name = 'findMany';
ProductTCdemo.addResolver(extendedResolver);

ProductTCdemo.addRelation('orderConnection', {
  resolver: () => OrderTC.getResolver('connection'),
  prepareArgs: {
    filter: source => ({ details: { productID: source.productID } }),
  },
  projection: { productID: true },
});

ProductTCdemo.addRelation('orderList', {
  resolver: () => OrderTC.getResolver('findMany'),
  prepareArgs: {
    filter: source => ({ details: { productID: source.productID } }),
  },
  projection: { productID: true },
});

ProductTCdemo.addRelation('supplier', {
  resolver: () => SupplierTC.getResolver('findOne'),
  prepareArgs: {
    filter: source => ({ supplierID: source.supplierID }),
    skip: null,
    sort: null,
  },
  projection: { supplierID: true },
});

ProductTCdemo.addRelation('category', {
  resolver: () => CategoryTC.getResolver('findOne'),
  prepareArgs: {
    filter: source => ({ categoryID: source.categoryID }),
    skip: null,
    sort: null,
  },
  projection: { categoryID: true },
});
