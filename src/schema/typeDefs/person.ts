import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { UserController } from "../../controllers/user.controller";
import { UserType } from "./user";

export const personFields = {
  id: {
    type: GraphQLID,
  },
  fullname: {
    type: GraphQLString,
  },
  type: {
    type: GraphQLString,
  },
  website: {
    type: GraphQLString,
  },
  profile_image: {
    type: GraphQLString,
  },
  userId: {
    type: GraphQLID,
  },
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ userId }: any, args: any) => {
      const userController = new UserController();
      return await userController.show(userId);
    },
  },
};

export const PersonType = new GraphQLObjectType({
  name: "Person",
  fields: {
    ...personFields,
  },
});
