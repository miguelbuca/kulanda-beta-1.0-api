import { Category } from "../models/category";
import {
  CreateCategoryService,
  UpdateCategoryService,
  DeleteCategoryService,
  GetCategoryService,
} from "../services/category";

export class CategoryController {
  async index(): Promise<any> {
    const getCategorysService = new GetCategoryService();
    return await getCategorysService.execute();
  }
  async store(payload: Category): Promise<any> {
    try {
      const createCategoryService = new CreateCategoryService();

      const { identifiers } = await createCategoryService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Category): Promise<any> {
      try {
        const updateCategoryService = new UpdateCategoryService();

        const result = await updateCategoryService.execute(id, payload);

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
       const getCategorysService = new GetCategoryService();
       return await getCategorysService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteCategorysService = new DeleteCategoryService();
       return await deleteCategorysService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
