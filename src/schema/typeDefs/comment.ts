import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { InteractionController } from "../../controllers/interaction.controller";
import { UserController } from "../../controllers/user.controller";
import { InteractionType } from "./interaction";
import { UserType } from "./user";

export const commentFields = {
  id: {
    type: GraphQLID,
  },
  message: {
    type: GraphQLString,
  },
  interactionId: {
    type: GraphQLID,
  },
  interaction: {
    type: InteractionType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ interactionId }: any, args: any) => {
      const interactionController = new InteractionController();
      return await interactionController.show(interactionId);
    },
  },
};

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: {
    ...commentFields,
  },
});
