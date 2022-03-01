import { GraphQLBoolean, GraphQLID } from "graphql";
import { CommentController } from "../../controllers/comment.controller";
import { commentFields as fields, CommentType } from "../typeDefs/comment";

const { interaction, ...CommentFields } = fields;

export const CREATE_COMMENT = {
  type: CommentType,
  args: {
    ...CommentFields
  },
  resolve: async (_: any, payload: any) => {
    const commentController = new CommentController()
    return await commentController.store(payload);
  },
};
export const DELETE_COMMENT = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const commentController = new CommentController();
    const { affected } = await commentController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_COMMENT = {
  type: CommentType,
  args: {
    ...CommentFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const commentController = new CommentController();

      return await commentController.update(id, payload);
  },
};