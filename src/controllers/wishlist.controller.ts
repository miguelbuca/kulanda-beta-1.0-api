import { WishList } from "../models/wishlist";
import {
  CreateWishListService,
  UpdateWishListService,
  DeleteWishListService,
  GetWishListService,
} from "../services/wishlist";

export class WishListController {
  async index(): Promise<any> {
    const getWishListsService = new GetWishListService();
    return await getWishListsService.execute();
  }
  async store(payload: WishList): Promise<any> {
    try {
      const createWishListService = new CreateWishListService();

      const { identifiers } = await createWishListService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: WishList): Promise<any> {
      try {
        const updateWishListService = new UpdateWishListService();

        const result = await updateWishListService.execute(id, payload);

        return {
          id: result?.raw?.OkPacket?.insertedId,
          ...payload,
        };
      } catch (error) {
        throw new Error(`${error}`);
      }
  }
  async show(id: string): Promise<any> {
     try {
       const getWishListsService = new GetWishListService();
       return await getWishListsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteWishListsService = new DeleteWishListService();
       return await deleteWishListsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
