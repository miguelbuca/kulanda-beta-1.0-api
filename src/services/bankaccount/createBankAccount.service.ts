import { getCustomRepository } from "typeorm";
import { BankAccount } from "../../models/bankaccount";
import BankAccountRepository from "../../repositories/bankaccount.repository";
export class CreateBankAccountService{ 
    async execute(payload: BankAccount): Promise<any> {

        const bankAccountRepository = getCustomRepository(
            BankAccountRepository
        )

        return await bankAccountRepository.insert(payload);
    }
}