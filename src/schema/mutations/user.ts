import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { UserController } from "../../controllers/user.controller";
import { MessageType } from "../typeDefs/message";
import { UserType } from "../typeDefs/user";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  resolve: async (_: any, payload: any) => {
    const userController = new UserController()
    return await userController.store(payload);
  },
};
export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const userController = new UserController();
    const { affected } = await userController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_USER = {
  type: UserType,
  args: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const userController = new UserController();

      return await userController.update(id, payload);
  },
};