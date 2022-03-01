import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { UserController } from "../../controllers/user.controller";
import { UserType } from "./user";

export const interactionFields = {
  id: {
    type: GraphQLID,
  },
  liked: {
    type: GraphQLBoolean,
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

export const InteractionType = new GraphQLObjectType({
  name: "Interaction",
  fields: {
    ...interactionFields,
  },
});
