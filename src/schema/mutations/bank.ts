import { GraphQLBoolean, GraphQLID } from "graphql";
import { BankController } from "../../controllers/bank.controller";
import { bankFields as fields, BankType } from "../typeDefs/bank";

const { ...bankFields } = fields;

export const CREATE_BANK = {
  type: BankType,
  args: {
    ...bankFields
  },
  resolve: async (_: any, payload: any) => {
    const bankController = new BankController()
    return await bankController.store(payload);
  },
};
export const DELETE_BANK = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const bankController = new BankController();
    const { affected } = await bankController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_BANK = {
  type: BankType,
  args: {
    ...bankFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const bankController = new BankController();

      return await bankController.update(id, payload);
  },
};