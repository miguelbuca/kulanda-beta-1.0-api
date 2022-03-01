import { GraphQLID, GraphQLList } from "graphql";
import { CategoryController } from "../../controllers/category.controller";
import { CategoryType } from "../typeDefs/category";

export const GET_ALL_CATEGORIES = {
  type: new GraphQLList(CategoryType),
  resolve: async () => {
    const categoryController = new CategoryController();
    return await categoryController.index();
  },
};
export const GET_CATEGORY = {
  type: CategoryType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const categoryController = new CategoryController();
    return await categoryController.show(args.id);
  },
};
