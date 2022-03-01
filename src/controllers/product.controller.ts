import { Product } from "../models/product";
import {
  CreateProductService,
  UpdateProductService,
  DeleteProductService,
  GetProductService,
} from "../services/product";

export class ProductController {
  async index(): Promise<any> {
    const getProductsService = new GetProductService();
    return await getProductsService.execute();
  }
  async store(payload: Product): Promise<any> {
    try {
      const createProductService = new CreateProductService();

      const { identifiers } = await createProductService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Product): Promise<any> {
      try {
        const updateProductService = new UpdateProductService();

        const result = await updateProductService.execute(id, payload);

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
       const getProductsService = new GetProductService();
       return await getProductsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteProductsService = new DeleteProductService();
       return await deleteProductsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
