import { GraphQLID, GraphQLList } from "graphql";
import { UserController } from "../../controllers/user.controller";
import { UserType } from "../typeDefs/user";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    const userController = new UserController();
    return await userController.index();
  },
};
export const GET_USER = {
  type: UserType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const userController = new UserController();
    return await userController.show(args.id);
  },
};
