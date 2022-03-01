import { GraphQLID, GraphQLList } from "graphql";
import { StoreController } from "../../controllers/store.controller";
import { StoreType } from "../typeDefs/store";

export const GET_ALL_STORES = {
  type: new GraphQLList(StoreType),
  resolve: async () => {
    const storeController = new StoreController();
    return await storeController.index();
  },
};
export const GET_STORE = {
  type: StoreType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const storeController = new StoreController();
    return await storeController.show(args.id);
  },
};
