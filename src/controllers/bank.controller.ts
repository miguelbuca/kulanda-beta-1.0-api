import { Bank } from "../models/bank";
import {
  CreateBankService,
  UpdateBankService,
  DeleteBankService,
  GetBankService,
} from "../services/bank";

export class BankController {
  async index(): Promise<any> {
    const getBanksService = new GetBankService();
    return await getBanksService.execute();
  }
  async store(payload: Bank): Promise<any> {
    try {
      const createBankService = new CreateBankService();

      const { identifiers } = await createBankService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Bank): Promise<any> {
      try {
        const updateBankService = new UpdateBankService();

        const result = await updateBankService.execute(id, payload);

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
       const getBanksService = new GetBankService();
       return await getBanksService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteBanksService = new DeleteBankService();
       return await deleteBanksService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
