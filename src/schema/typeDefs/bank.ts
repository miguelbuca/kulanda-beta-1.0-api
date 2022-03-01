import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const bankFields = {
  id: {
    type: GraphQLID,
  },
  name: {
    type: GraphQLString,
  },
  website: {
    type: GraphQLString,
  },
};

export const BankType = new GraphQLObjectType({
  name: "Bank",
  fields: {
    ...bankFields,
  },
});
