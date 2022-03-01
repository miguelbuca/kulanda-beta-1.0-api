import { GraphQLID, GraphQLList } from "graphql";
import { BankController } from "../../controllers/bank.controller";
import { BankType } from "../typeDefs/bank";

export const GET_ALL_BANKS = {
  type: new GraphQLList(BankType),
  resolve: async () => {
    const bankController = new BankController();
    return await bankController.index();
  },
};
export const GET_BANK = {
  type: BankType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const bankController = new BankController();
    return await bankController.show(args.id);
  },
};
