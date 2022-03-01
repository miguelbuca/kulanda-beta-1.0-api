import { GraphQLBoolean, GraphQLID } from "graphql";
import { CategoryController } from "../../controllers/category.controller";
import { categoryFields as fields, CategoryType } from "../typeDefs/category";

const { ...categoryFields } = fields;

export const CREATE_CATEGORY = {
  type: CategoryType,
  args: {
    ...categoryFields
  },
  resolve: async (_: any, payload: any) => {
    const categoryController = new CategoryController()
    return await categoryController.store(payload);
  },
};
export const DELETE_CATEGORY = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const categoryController = new CategoryController();
    const { affected } = await categoryController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_CATEGORY = {
  type: CategoryType,
  args: {
    ...categoryFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const categoryController = new CategoryController();

      return await categoryController.update(id, payload);
  },
};