import { GraphQLFloat, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { BankController } from "../../controllers/bank.controller";
import { PersonController } from "../../controllers/person.controller";
import { BankType } from "./bank";
import { PersonType } from "./person";

export const bankAccountFields = {
  id: {
    type: GraphQLID,
  },
  iban: {
    type: GraphQLString,
  },
  owner_name: {
    type: GraphQLString,
  },
  current_balance: {
    type: GraphQLFloat,
  },
  personId: {
    type: GraphQLID,
  },
  bankId: {
    type: GraphQLID,
  },
  person: {
    type: PersonType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ personId }: any, args: any) => {
      const personController = new PersonController();
      return await personController.show(personId);
    },
  },
  bank: {
    type: BankType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: async ({ bankId }: any, args: any) => {
      const bankController = new BankController();
      return await bankController.show(bankId);
    },
  },
};

export const BankAccountType = new GraphQLObjectType({
  name: "BankAccount",
  fields: {
    ...bankAccountFields,
  },
});
