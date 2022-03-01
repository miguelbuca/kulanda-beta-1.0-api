import { getCustomRepository } from "typeorm";
import { BankAccount } from "../../models/bankaccount";
import BankAccountRepository from "../../repositories/bankaccount.repository";

export class UpdateBankAccountService {
  async execute(id: string, payload: BankAccount): Promise<any> {
    const bankAccountRepository = getCustomRepository(BankAccountRepository);

    const bankAccount = await bankAccountRepository.findOne(id);

    if (!bankAccount) throw new Error("BankAccount not found!");

    return await bankAccountRepository.update(
      {
        id,
      },
      {
        id,
        ...payload,
      }
    );
  }
}
