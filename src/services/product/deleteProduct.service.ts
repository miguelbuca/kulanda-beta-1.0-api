import { getCustomRepository } from "typeorm";
import ProductRepository from "../../repositories/product.repository";

export class DeleteProductService {
  async execute(id: string): Promise<any> {
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.delete(id);
  }
}
