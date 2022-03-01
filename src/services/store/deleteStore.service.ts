import { getCustomRepository } from "typeorm";
import StoreRepository from "../../repositories/store.repository";

export class DeleteStoreService {
  async execute(id: string): Promise<any> {
    const storeRepository = getCustomRepository(StoreRepository);
    return await storeRepository.delete(id);
  }
}
