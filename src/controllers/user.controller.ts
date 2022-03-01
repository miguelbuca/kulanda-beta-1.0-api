import { User } from "../models/user";
import {
  CreateUserService,
  UpdateUserService,
  DeleteUsersService,
  GetUsersService,
} from "../services/user";

export class UserController {
  async index(): Promise<any> {
    const getUsersService = new GetUsersService();
    return await getUsersService.execute();
  }
  async store(payload: User): Promise<any> {
    try {
      const createUserService = new CreateUserService();

      const { identifiers } = await createUserService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: User): Promise<any> {
      try {
        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute(id, payload);

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
       const getUsersService = new GetUsersService();
       return await getUsersService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteUsersService = new DeleteUsersService();
       return await deleteUsersService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
