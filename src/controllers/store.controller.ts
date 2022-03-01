import { Store } from "../models/store";
import {
  CreateStoreService,
  UpdateStoreService,
  DeleteStoreService,
  GetStoreService,
} from "../services/store";

export class StoreController {
  async index(): Promise<any> {
    const getStoresService = new GetStoreService();
    return await getStoresService.execute();
  }
  async store(payload: Store): Promise<any> {
    try {
      const createStoreService = new CreateStoreService();

      const { identifiers } = await createStoreService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Store): Promise<any> {
      try {
        const updateStoreService = new UpdateStoreService();

        const result = await updateStoreService.execute(id, payload);

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
       const getStoresService = new GetStoreService();
       return await getStoresService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteStoresService = new DeleteStoreService();
       return await deleteStoresService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
