import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { CategoryController } from "../../controllers/category.controller";
import { CategoryType } from "./category";

export const subcategoryFields = {
  id: {
    type: GraphQLID,
  },
  name: {
    type: GraphQLString,
  },
  description: {
    type: GraphQLString,
  },
  categoryId: {
    type: GraphQLID,
  },
  category: {
    type: CategoryType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ categoryId }: any, args: any) => {
      const categoryController = new CategoryController();
      return await categoryController.show(categoryId);
    },
  },
};

export const SubcategoryType = new GraphQLObjectType({
  name: "Subcategory",
  fields: {
    ...subcategoryFields,
  },
});
