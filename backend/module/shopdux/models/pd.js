import mongoose, { mongo } from "mongoose";
import { composeWithMongoose, composeWithRelay } from "../schemaComposer";
import { __values } from "tslib";

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
    id: Object,
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
    id : Object,
    name: String,
    control: String,
    required: Boolean,
    position: Number,
    values: [{
        id: Object,
        name: String
    }]
  },
  {
    _id: false
  }
);
export const Variants = new mongoose.Schema(
  {
    id : Object,
    sku: String,
    price: Number,
    stock_quantity: Number,
    weight : Number,
    options: [{
        option_id : Object,
        value_id : Object
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



export const pdSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    slug: {
      type: String,
      description: "Slug product unique",
      unique: true
    },
    category_id: {
      type: Object
    },
    category_ids: {
      type: Object
    },
    description: String,
    meta_description: String,
    meta_title: String,
    sku: String,
    code: String,
    tax_class: String,
    tag: [String],
    related_product_ids: Object,
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
    collection: "db_pd"
  }
);

export const pd = mongoose.model("pd", pdSchema);

export const pdTC = composeWithRelay(composeWithMongoose(pd));

