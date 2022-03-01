import { Subcategory } from "../models/subcategory";
import {
  CreateSubcategoryService,
  UpdateSubcategoryService,
  DeleteSubcategoryService,
  GetSubcategoryService,
} from "../services/subcategory";

export class SubcategoryController {
  async index(): Promise<any> {
    const getSubcategorysService = new GetSubcategoryService();
    return await getSubcategorysService.execute();
  }
  async store(payload: Subcategory): Promise<any> {
    try {
      const createSubcategoryService = new CreateSubcategoryService();

      const { identifiers } = await createSubcategoryService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Subcategory): Promise<any> {
      try {
        const updateSubcategoryService = new UpdateSubcategoryService();

        const result = await updateSubcategoryService.execute(id, payload);

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
       const getSubcategorysService = new GetSubcategoryService();
       return await getSubcategorysService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteSubcategorysService = new DeleteSubcategoryService();
       return await deleteSubcategorysService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
