import { getCustomRepository } from "typeorm";
import { WishList } from "../../models/wishlist";
import WishListRepository from "../../repositories/wishlist.repository";
export class CreateWishListService{ 
    async execute(payload: WishList): Promise<any> {

        const wishListRepository = getCustomRepository(
            WishListRepository
        )

        return await wishListRepository.insert(payload);
    }
}