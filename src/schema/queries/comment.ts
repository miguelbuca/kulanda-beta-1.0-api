import { GraphQLID, GraphQLList } from "graphql";
import { CommentController } from "../../controllers/comment.controller";
import { CommentType } from "../typeDefs/comment";

export const GET_ALL_COMMENTS = {
  type: new GraphQLList(CommentType),
  resolve: async () => {
    const commentController = new CommentController();
    return await commentController.index();
  },
};
export const GET_COMMENT = {
  type: CommentType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const commentController = new CommentController();
    return await commentController.show(args.id);
  },
};
