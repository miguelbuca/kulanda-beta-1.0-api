import { GraphQLFloat, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { UserController } from "../../controllers/user.controller";
import { UserType } from "./user";

export const wishListFields = {
  id: {
    type: GraphQLID,
  },
  keyword: {
    type: GraphQLString,
  },
  min_price: {
    type: GraphQLFloat,
  },
  max_price: {
    type: GraphQLFloat,
  },
  userId: {
    type: GraphQLString,
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

export const WishListType = new GraphQLObjectType({
  name: "WishList",
  fields: {
    ...wishListFields,
  },
});
