import { getCustomRepository } from "typeorm";
import CategoryRepository from "../../repositories/category.repository";

export class DeleteCategoryService {
  async execute(id: string): Promise<any> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    return await categoryRepository.delete(id);
  }
}
