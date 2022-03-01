import { GraphQLBoolean, GraphQLID } from "graphql";
import { SubcategoryController } from "../../controllers/subcategory.controller";
import { subcategoryFields as fields, SubcategoryType } from "../typeDefs/subcategory";

const { category , ...SubcategoryFields } = fields;

export const CREATE_SUBCATEGORY = {
  type: SubcategoryType,
  args: {
    ...SubcategoryFields
  },
  resolve: async (_: any, payload: any) => {
    const subcategoryController = new SubcategoryController()
    return await subcategoryController.store(payload);
  },
};
export const DELETE_SUBCATEGORY = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const subcategoryController = new SubcategoryController();
    const { affected } = await subcategoryController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_SUBCATEGORY = {
  type: SubcategoryType,
  args: {
    ...SubcategoryFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const subcategoryController = new SubcategoryController();

      return await subcategoryController.update(id, payload);
  },
};