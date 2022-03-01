import { getCustomRepository } from "typeorm";
import BankAccountRepository from "../../repositories/bankaccount.repository";

export class GetBankAccountService {
  async execute(id?: string): Promise<any> {
    const bankAccountRepository = getCustomRepository(BankAccountRepository);
    if (!id) {
      return await bankAccountRepository.find();
    } else {
      return await bankAccountRepository.findOne(id);
    }
  }
}
