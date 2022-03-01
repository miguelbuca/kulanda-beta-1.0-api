import { getCustomRepository } from "typeorm";
import { Store } from "../../models/store";
import StoreRepository from "../../repositories/store.repository";

export class UpdateStoreService {
  async execute(id: string, payload: Store): Promise<any> {
    const storeRepository = getCustomRepository(StoreRepository);

    const store = await storeRepository.findOne(id)

    if(!store)throw new Error('Store not found!')

    return await storeRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
