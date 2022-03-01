import { getCustomRepository } from "typeorm";
import { Category } from "../../models/category";
import CategoryRepository from "../../repositories/category.repository";

export class UpdateCategoryService {
  async execute(id: string, payload: Category): Promise<any> {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne(id)

    if(!category)throw new Error('Category not found!')

    return await categoryRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
