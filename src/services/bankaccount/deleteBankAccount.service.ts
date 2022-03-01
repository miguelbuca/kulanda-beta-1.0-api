import { getCustomRepository } from "typeorm";
import BankAccountRepository from "../../repositories/bankaccount.repository";

export class DeleteBankAccountService {
  async execute(id: string): Promise<any> {
    const bankAccountRepository = getCustomRepository(BankAccountRepository);
    return await bankAccountRepository.delete(id);
  }
}
