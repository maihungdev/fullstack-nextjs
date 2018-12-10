/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose, composeWithRelay } from '../schemaComposer';
import { AddressSchema } from './addressSchema';
import { ProductTC } from './product';

export const VendorSchema = new mongoose.Schema(
  {
    VendorID: {
      type: Number,
      description: 'Vendor unique ID',
      unique: true,
    },
    companyName: {
      type: String,
      unique: true,
    },
    contactName: String,
    contactTitle: String,
    address: AddressSchema,
  },
  {
    collection: 'db_vendors',
  }
);

export const Vendor = mongoose.model('Vendor', VendorSchema);

export const VendorTC = composeWithRelay(composeWithMongoose(Vendor));

VendorTC.addRelation('productConnection', {
  resolver: () => ProductTC.getResolver('connection'),
  prepareArgs: {
    filter: source => ({ vendor_id: source._id }),
  },
  projection: { VendorID: true },
});

VendorTC.addRelation('product', {
  resolver: () => ProductTC.getResolver('findMany'),
  prepareArgs: {
    filter: source => ({ vendor_id: source._id }),
    skip: null,
    sort: null,
  },
  projection: { _id: true },
});
