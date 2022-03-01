import { getCustomRepository } from "typeorm";
import BankRepository from "../../repositories/bank.repository";

export class DeleteBankService {
  async execute(id: string): Promise<any> {
    const bankRepository = getCustomRepository(BankRepository);
    return await bankRepository.delete(id);
  }
}
