import { getCustomRepository } from "typeorm";
import { WishList } from "../../models/wishlist";
import WishListRepository from "../../repositories/wishlist.repository";

export class UpdateWishListService {
  async execute(id: string, payload: WishList): Promise<any> {
    const wishListRepository = getCustomRepository(WishListRepository);

    const wishList = await wishListRepository.findOne(id)

    if(!wishList)throw new Error('WishList not found!')

    return await wishListRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
