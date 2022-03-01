import { Person } from "../models/person";
import {
  CreatePersonService,
  UpdatePersonService,
  DeletePersonService,
  GetPersonService,
} from "../services/person";

export class PersonController {
  async index(): Promise<any> {
    const getPersonsService = new GetPersonService();
    return await getPersonsService.execute();
  }
  async store(payload: Person): Promise<any> {
    try {
      const createPersonService = new CreatePersonService();

      const { identifiers } = await createPersonService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Person): Promise<any> {
      try {
        const updatePersonService = new UpdatePersonService();

        const result = await updatePersonService.execute(id, payload);

        return {
          id: result?.raw?.OkPacket?.insertedId,
          ...payload,
        };
      } catch (error) {
        throw new Error(`${error}`);
      }
  }
  async show(id: string): Promise<any> {
     try {
       const getPersonsService = new GetPersonService();
       return await getPersonsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deletePersonsService = new DeletePersonService();
       return await deletePersonsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
