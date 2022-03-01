import { GraphQLBoolean, GraphQLID } from "graphql";
import { BankAccountController } from "../../controllers/bankaccount.controller";
import { bankAccountFields as fields, BankAccountType } from "../typeDefs/bankaccount";

const { person, bank ,...BankAccountFields } = fields;

export const CREATE_BANKACCOUNT = {
  type: BankAccountType,
  args: {
    ...BankAccountFields
  },
  resolve: async (_: any, payload: any) => {
    const bankAccountController = new BankAccountController()
    return await bankAccountController.store(payload);
  },
};
export const DELETE_BANKACCOUNT = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const bankAccountController = new BankAccountController();
    const { affected } = await bankAccountController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_BANKACCOUNT = {
  type: BankAccountType,
  args: {
    ...BankAccountFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const bankAccountController = new BankAccountController();

      return await bankAccountController.update(id, payload);
  },
};