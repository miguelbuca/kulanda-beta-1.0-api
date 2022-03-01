import { getCustomRepository } from "typeorm";
import { Category } from "../../models/category";
import CategoryRepository from "../../repositories/category.repository";
export class CreateCategoryService{ 
    async execute(payload: Category): Promise<any> {

        const categoryRepository = getCustomRepository(
            CategoryRepository
        )

        return await categoryRepository.insert(payload);
    }
}