import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { PersonController } from "../../controllers/person.controller";
import { personFields as fields, PersonType } from "../typeDefs/person";

const { user, ...personFields } = fields;

export const CREATE_PERSON = {
  type: PersonType,
  args: {
    ...personFields
  },
  resolve: async (_: any, payload: any) => {
    const personController = new PersonController()
    return await personController.store(payload);
  },
};
export const DELETE_PERSON = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const personController = new PersonController();
    const { affected } = await personController.delete(args.id);
    return affected === 1 
  },
};

export const UPDATE_PERSON = {
  type: PersonType,
  args: {
    ...personFields
  },
  resolve: async (_: any, { id, ...payload }: any) => {
    
      const personController = new PersonController();

      return await personController.update(id, payload);
  },
};