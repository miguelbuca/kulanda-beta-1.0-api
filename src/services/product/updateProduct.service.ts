import { getCustomRepository } from "typeorm";
import { Product } from "../../models/product";
import ProductRepository from "../../repositories/product.repository";

export class UpdateProductService {
  async execute(id: string, payload: Product): Promise<any> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id)

    if(!product)throw new Error('Product not found!')

    return await productRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
