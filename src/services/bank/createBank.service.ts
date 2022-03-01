import { getCustomRepository } from "typeorm";
import { Bank } from "../../models/bank";
import BankRepository from "../../repositories/bank.repository";
export class CreateBankService{ 
    async execute(payload: Bank): Promise<any> {

        const bankRepository = getCustomRepository(
            BankRepository
        )

        return await bankRepository.insert(payload);
    }
}