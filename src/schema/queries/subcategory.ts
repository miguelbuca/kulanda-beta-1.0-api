import { GraphQLID, GraphQLList } from "graphql";
import { SubcategoryController } from "../../controllers/subcategory.controller";
import { SubcategoryType } from "../typeDefs/subcategory";

export const GET_ALL_SUBCATEGORIES = {
  type: new GraphQLList(SubcategoryType),
  resolve: async () => {
    const subcategoryController = new SubcategoryController();
    return await subcategoryController.index();
  },
};
export const GET_SUBCATEGORY = {
  type: SubcategoryType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const subcategoryController = new SubcategoryController();
    return await subcategoryController.show(args.id);
  },
};
