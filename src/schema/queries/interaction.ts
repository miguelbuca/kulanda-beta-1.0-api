import { GraphQLID, GraphQLList } from "graphql";
import { InteractionController } from "../../controllers/interaction.controller";
import { InteractionType } from "../typeDefs/interaction";

export const GET_ALL_INTERACTIONS = {
  type: new GraphQLList(InteractionType),
  resolve: async () => {
    const interactionController = new InteractionController();
    return await interactionController.index();
  },
};
export const GET_INTERACTION = {
  type: InteractionType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const interactionController = new InteractionController();
    return await interactionController.show(args.id);
  },
};
