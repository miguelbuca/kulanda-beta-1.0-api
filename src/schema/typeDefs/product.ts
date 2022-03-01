import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { SubcategoryType } from "./subcategory";
import { StoreType } from "./store";
import { StoreController } from "../../controllers/store.controller";
import { SubcategoryController } from "../../controllers/subcategory.controller";


export const productFields = {
  id: {
    type: GraphQLID,
  },
  name: {
    type: GraphQLString,
  },
  image: {
    type: GraphQLString,
  },
  price: {
    type: GraphQLFloat,
  },
  promotion: {
    type: GraphQLBoolean,
  },
  new_price: {
    type: GraphQLFloat,
  },
  subcategoryId: {
    type: GraphQLID,
  },
  subcategory: {
    type: SubcategoryType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ subcategoryId }: any, args: any) => {
      const subcategoryController = new SubcategoryController();
      return await subcategoryController.show(subcategoryId);
    },
  },
  storeId: {
    type: GraphQLString,
  },
  stores: {
    type: StoreType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ storeId }: any, args: any) => {
      const storeController = new StoreController();
      return await storeController.show(storeId);
    },
  },
};

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    ...productFields,
  },
});
