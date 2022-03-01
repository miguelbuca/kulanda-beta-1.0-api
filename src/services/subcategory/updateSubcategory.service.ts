import { getCustomRepository } from "typeorm";
import { Subcategory } from "../../models/subcategory";
import SubcategoryRepository from "../../repositories/subcategory.repository";

export class UpdateSubcategoryService {
  async execute(id: string, payload: Subcategory): Promise<any> {
    const subcategoryRepository = getCustomRepository(SubcategoryRepository);

    const subcategory = await subcategoryRepository.findOne(id)

    if(!subcategory)throw new Error('Subcategory not found!')

    return await subcategoryRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
