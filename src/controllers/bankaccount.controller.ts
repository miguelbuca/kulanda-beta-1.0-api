import { BankAccount } from "../models/bankaccount";
import {
  CreateBankAccountService,
  UpdateBankAccountService,
  DeleteBankAccountService,
  GetBankAccountService,
} from "../services/bankaccount";

export class BankAccountController {
  async index(): Promise<any> {
    const getBankAccountsService = new GetBankAccountService();
    return await getBankAccountsService.execute();
  }
  async store(payload: BankAccount): Promise<any> {
    try {
      const createBankAccountService = new CreateBankAccountService();

      const { identifiers } = await createBankAccountService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: BankAccount): Promise<any> {
      try {
        const updateBankAccountService = new UpdateBankAccountService();

        const result = await updateBankAccountService.execute(id, payload);

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
       const getBankAccountsService = new GetBankAccountService();
       return await getBankAccountsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteBankAccountsService = new DeleteBankAccountService();
       return await deleteBankAccountsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
