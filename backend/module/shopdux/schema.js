/* @flow */

// SINGLE SCHEMA ON SERVER
// import { schemaComposer } from 'graphql-compose';

// MULTI SCHEMA MODE IN ONE SERVER
// import { SchemaComposer } from 'graphql-compose';
// const schemaComposer = new SchemaComposer();

import { schemaComposer, composeWithRelay } from './schemaComposer';
import { CategoryTC } from './models/category';
import { CustomerTC } from './models/customer';
import { EmployeeTC } from './models/employee';
import { OrderTC } from './models/order';
import { RegionTC } from './models/region';
import { ShipperTC } from './models/shipper';
import { VendorTC } from './models//vendor';
import { ProductTC } from './models/product';
import allowOnlyForLocalhost from './auth/allowOnlyForLocalhost';

composeWithRelay(schemaComposer.Query);

const ViewerTC = schemaComposer.getOrCreateTC('Viewer');
schemaComposer.Query.addFields({
  viewer: {
    type: ViewerTC.getType(),
    description: 'Data under client context',
    resolve: () => ({}),
  },
});

const fields = {
  category: CategoryTC.getResolver('findOne'),
  categoryList: CategoryTC.getResolver('findMany'),
  categoryConnection: CategoryTC.getResolver('connection'),
  
  productById: ProductTC.getResolver('findById'),
  productOne: ProductTC.getResolver('findOne'),
  productList: ProductTC.getResolver('findMany'),
  productPagination: ProductTC.getResolver("pagination"),
  productConnection: ProductTC.getResolver('connection'),

  customer: CustomerTC.getResolver('findOne'),
  customerConnection: CustomerTC.getResolver('connection'),

  employee: EmployeeTC.getResolver('findOne'),
  employeeList: EmployeeTC.getResolver('findMany'),

  order: OrderTC.getResolver('findOne'),
  orderConnection: OrderTC.getResolver('connection'),

  region: RegionTC.getResolver('findOne'),
  regionList: RegionTC.getResolver('findMany'),

  shipper: ShipperTC.getResolver('findOne'),
  shipperList: ShipperTC.getResolver('findMany'),

  vendor: VendorTC.getResolver('findOne'),
  vendorList: VendorTC.getResolver('findMany'),
  vendorConnection: VendorTC.getResolver('connection')

};

ViewerTC.addFields(fields);


schemaComposer.Mutation.addFields({
  ...allowOnlyForLocalhost({
    createProduct: ProductTC.get('$createOne'),
    createProduct: ProductTC.get('$createOne'),
    productUpdateById: ProductTC.getResolver('updateById'),
    createCustomer: CustomerTC.get('$createOne'),
    removeProductById: ProductTC.get('$removeById'),
    vendorUpdateById: VendorTC.getResolver('updateById'),
  }),
});



export default schemaComposer.buildSchema();
