import { getCustomRepository } from "typeorm";
import { Product } from "../../models/product";
import ProductRepository from "../../repositories/product.repository";
export class CreateProductService{ 
    async execute(payload: Product): Promise<any> {

        const productRepository = getCustomRepository(
            ProductRepository
        )

        return await productRepository.insert(payload);
    }
}