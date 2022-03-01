import { GraphQLBoolean, GraphQLID } from "graphql";
import { InteractionController } from "../../controllers/interaction.controller";
import { interactionFields as fields, InteractionType } from "../typeDefs/interaction";

const { user, ...interactionFields } = fields;

export const CREATE_INTERACTION = {
  type: InteractionType,
  args: {
    ...interactionFields
  },
  resolve: async (_: any, payload: any) => {
    const interactionController = new InteractionController()
    return await interactionController.store(payload);
  },
};
export const DELETE_INTERACTION = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const interactionController = new InteractionController();
    const { affected } = await interactionController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_INTERACTION = {
  type: InteractionType,
  args: {
    ...interactionFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const interactionController = new InteractionController();

      return await interactionController.update(id, payload);
  },
};