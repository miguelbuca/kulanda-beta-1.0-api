import { GraphQLID, GraphQLList } from "graphql";
import { PersonController } from "../../controllers/person.controller";
import { PersonType } from "../typeDefs/person";

export const GET_ALL_PERSONS = {
  type: new GraphQLList(PersonType),
  resolve: async () => {
    const personController = new PersonController();
    return await personController.index();
  },
};
export const GET_PERSON = {
  type: PersonType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const personController = new PersonController();
    return await personController.show(args.id);
  },
};
