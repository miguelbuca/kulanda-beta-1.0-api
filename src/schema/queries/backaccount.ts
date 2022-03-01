import { GraphQLID, GraphQLList } from "graphql";
import { BankAccountController } from "../../controllers/bankaccount.controller";
import { BankAccountType } from "../typeDefs/bankaccount";

export const GET_ALL_BANKACCOUNTS = {
  type: new GraphQLList(BankAccountType),
  resolve: async () => {
    const bankAccountController = new BankAccountController();
    return await bankAccountController.index();
  },
};
export const GET_BANKACCOUNT = {
  type: BankAccountType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const bankAccountController = new BankAccountController();
    return await bankAccountController.show(args.id);
  },
};
