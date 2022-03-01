import { getCustomRepository } from "typeorm";
import { Store } from "../../models/store";
import StoreRepository from "../../repositories/store.repository";
export class CreateStoreService{ 
    async execute(payload: Store): Promise<any> {

        const storeRepository = getCustomRepository(
            StoreRepository
        )
        return await storeRepository.insert(payload);
    }
}