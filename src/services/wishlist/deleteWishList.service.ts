import { getCustomRepository } from "typeorm";
import WishListRepository from "../../repositories/wishlist.repository";

export class DeleteWishListService {
  async execute(id: string): Promise<any> {
    const wishListRepository = getCustomRepository(WishListRepository);
    return await wishListRepository.delete(id);
  }
}
