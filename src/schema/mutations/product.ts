import { GraphQLBoolean, GraphQLID } from "graphql";
import { ProductController } from "../../controllers/product.controller";
import { productFields as fields, ProductType } from "../typeDefs/product";

const { stores, subcategory ,...productFields } = fields;

export const CREATE_PRODUCT = {
  type: ProductType,
  args: {
    ...productFields
  },
  resolve: async (_: any, payload: any) => {
    const productController = new ProductController()
    return await productController.store(payload);
  },
};
export const DELETE_PRODUCT = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const productController = new ProductController();
    const { affected } = await productController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_PRODUCT = {
  type: ProductType,
  args: {
    ...productFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const productontroller = new ProductController()
      return await productontroller.update(id, payload);
  },
};