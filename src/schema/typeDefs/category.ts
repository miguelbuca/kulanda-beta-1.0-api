import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const categoryFields = {
  id: {
    type: GraphQLID,
  },
  name: {
    type: GraphQLString,
  },
  description: {
    type: GraphQLString,
  },
};

export const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: {
    ...categoryFields,
  },
});
