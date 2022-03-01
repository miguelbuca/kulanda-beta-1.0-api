import { getCustomRepository } from "typeorm";
import BankRepository from "../../repositories/bank.repository";

export class GetBankService {
  async execute(id?: string): Promise<any> {
    const bankRepository = getCustomRepository(BankRepository);
    if (!id) {
      return await bankRepository.find();
    }else{
      return await bankRepository.findOne(id);
    }
  }
}
