import { getCustomRepository } from "typeorm";
import ProductRepository from "../../repositories/product.repository";

export class GetProductService {
  async execute(id?: string): Promise<any> {
    const productRepository = getCustomRepository(ProductRepository);
    if (!id) {
      return await productRepository.find();
    }else{
      return await productRepository.findOne(id);
    }
  }
}
