import mongoose, { mongo } from "mongoose";
import { composeWithMongoose, composeWithRelay } from "../schemaComposer";
import { __values } from "tslib";
import { CategoryTC } from './category';
import { VendorTC } from './vendor';

// define

export const Dimensions = new mongoose.Schema(
  {
    length: Number,
    width: Number,
    height: Number
  },
  {
    _id: false
  }
);

export const Images = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    alt: String,
    position: Number,
    filename: String
  },
  {
    _id: false
  }
);
export const Options = new mongoose.Schema(
  {
    id : mongoose.Schema.Types.ObjectId,
    name: String,
    control: String,
    required: Boolean,
    position: Number,
    values: [{
        id: mongoose.Schema.Types.ObjectId,
        name: String
    }]
  },
  {
    _id: false
  }
);
export const Variants = new mongoose.Schema(
  {
    id : mongoose.Schema.Types.ObjectId,
    sku: String,
    price: Number,
    stock_quantity: Number,
    weight : Number,
    options: [{
        option_id : mongoose.Schema.Types.ObjectId,
        value_id : mongoose.Schema.Types.ObjectId
    }]
  },
  {
    _id: false
  }
);
export const Attributes = new mongoose.Schema(
  {
    name : String,
    value: String,
  },
  {
    _id: false
  }
);



export const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    slug: {
      type: String,
      description: "Slug product unique",
      unique: true
    },
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    category_ids: [{
      type: mongoose.Schema.Types.ObjectId
    }
    ],
    description: String,
    meta_description: String,
    meta_title: String,
    sku: String,
    code: String,
    tax_class: String,
    tag: [String],
    related_product_ids: [mongoose.Schema.Types.ObjectId],
    const_price: {
      type: Number
    },
    regular_price: {
      type: Number
    },
    sale_price: {
      type: Number
    },
    quantity_inc: {
      type: Number
    },
    quantity_min: {
      type: Number
    },
    weight: {
      type: Number
    },
    stock_quantity: {
      type: Number
    },
    date_created: {
      type: Date
    },
    date_updated: {
      type: Date
    },
    enabled: Boolean,
    discontinued: Boolean,
    stock_tracking: Boolean,
    stock_preoder: Boolean,
    stock_backorder: Boolean,
    images: [Images],
    options: [Options],
    variants: [Variants],
    attributes: [Attributes],
    dimensions: Dimensions
  },
  {
    collection: "db_products"
  }
);

export const products = mongoose.model("products", productsSchema);

export const ProductTC = composeWithRelay(composeWithMongoose(products));

ProductTC.addRelation('category', {
  resolver: () => CategoryTC.getResolver('findOne'),
  prepareArgs: {
    filter: source => ({ _id: source.category_id }),
    skip: null,
    sort: null,
  },
  projection: { _id: true },
});

ProductTC.addRelation('vendor', {
  resolver: () => VendorTC.getResolver('findOne'),
  prepareArgs: {
    filter: source => ({ _id: source.vendor_id }),
    skip: null,
    sort: null,
  },
  projection: { _id: true },
});