import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { PersonController } from "../../controllers/person.controller";
import { PersonType } from "./person";

export const storeFields = {
  id: {
    type: GraphQLID,
  },
  name: {
    type: GraphQLString,
  },
  website: {
    type: GraphQLString,
  },
  logo: {
    type: GraphQLString,
  },
  personId: {
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
};

export const StoreType = new GraphQLObjectType({
  name: "Store",
  fields: {
    ...storeFields,
  },
});
