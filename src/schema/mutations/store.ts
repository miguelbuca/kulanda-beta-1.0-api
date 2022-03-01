import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { StoreController } from "../../controllers/store.controller";
import { storeFields as fields, StoreType } from "../typeDefs/store";

const { person, ...StoreFields } = fields;

export const CREATE_STORE = {
  type: StoreType,
  args: {
    ...StoreFields
  },
  resolve: async (_: any, payload: any) => {
    const storeController = new StoreController()
    return await storeController.store(payload);
  },
};
export const DELETE_STORE = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const storeController = new StoreController();
    const { affected } = await storeController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_STORE = {
  type: StoreType,
  args: {
    ...StoreFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const storeController = new StoreController();

      return await storeController.update(id, payload);
  },
};