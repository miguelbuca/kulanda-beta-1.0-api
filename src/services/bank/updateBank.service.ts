import { getCustomRepository } from "typeorm";
import { Bank } from "../../models/bank";
import BankRepository from "../../repositories/bank.repository";

export class UpdateBankService {
  async execute(id: string, payload: Bank): Promise<any> {
    const bankRepository = getCustomRepository(BankRepository);

    const Bank = await bankRepository.findOne(id)

    if(!Bank)throw new Error('Bank not found!')

    return await bankRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
