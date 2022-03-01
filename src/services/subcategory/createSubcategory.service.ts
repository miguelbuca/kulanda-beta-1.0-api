import { getCustomRepository } from "typeorm";
import { Subcategory } from "../../models/subcategory";
import SubcategoryRepository from "../../repositories/subcategory.repository";
export class CreateSubcategoryService{ 
    async execute(payload: Subcategory): Promise<any> {

        const subcategoryRepository = getCustomRepository(
            SubcategoryRepository
        )

        return await subcategoryRepository.insert(payload);
    }
}