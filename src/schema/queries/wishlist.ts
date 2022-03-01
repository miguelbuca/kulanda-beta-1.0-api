import { GraphQLID, GraphQLList } from "graphql";
import { WishListController } from "../../controllers/wishlist.controller";
import { WishListType } from "../typeDefs/wishlist";

export const GET_ALL_WISHLISTS = {
  type: new GraphQLList(WishListType),
  resolve: async () => {
    const wishListController = new WishListController();
    return await wishListController.index();
  },
};
export const GET_WISHLIST = {
  type: WishListType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const wishListController = new WishListController();
    return await wishListController.show(args.id);
  },
};
