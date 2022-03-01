import { getCustomRepository } from "typeorm";
import StoreRepository from "../../repositories/store.repository";

export class GetStoreService {
  async execute(id?: string): Promise<any> {
    const storeRepository = getCustomRepository(StoreRepository);
    if (!id) {
      return await storeRepository.find();
    }else{
      return await storeRepository.findOne(id);
    }
  }
}
