import { getCustomRepository } from "typeorm";
import WishListRepository from "../../repositories/wishlist.repository";

export class GetWishListService {
  async execute(id?: string): Promise<any> {
    const wishListRepository = getCustomRepository(WishListRepository);
    if (!id) {
      return await wishListRepository.find();
    }else{
      return await wishListRepository.findOne(id);
    }
  }
}
