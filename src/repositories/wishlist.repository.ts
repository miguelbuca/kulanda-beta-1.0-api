import { EntityRepository, Repository } from "typeorm";
import { WishList } from "../database/entities/wishlist.entity";

@EntityRepository(WishList)
export default class WishListRepository extends Repository<WishList> {}