import { GraphQLBoolean, GraphQLID } from "graphql";
import { WishListController } from "../../controllers/wishlist.controller";
import { wishListFields as fields, WishListType } from "../typeDefs/wishlist";

const { user, ...WishListFields } = fields;

export const CREATE_WISHLIST = {
  type: WishListType,
  args: {
    ...WishListFields
  },
  resolve: async (_: any, payload: any) => {
    const wishListController = new WishListController()
    return await wishListController.store(payload);
  },
};
export const DELETE_WISHLIST = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const wishListController = new WishListController();
    const { affected } = await wishListController.delete(args.id);
    return affected === 1;
  },
};

export const UPDATE_WISHLIST = {
  type: WishListType,
  args: {
    ...WishListFields,
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    const wishListController = new WishListController();

    return await wishListController.update(id, payload);
  },
};