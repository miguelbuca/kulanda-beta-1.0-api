import { getCustomRepository } from "typeorm";
import SubcategoryRepository from "../../repositories/subcategory.repository";

export class DeleteSubcategoryService {
  async execute(id: string): Promise<any> {
    const subcategoryRepository = getCustomRepository(SubcategoryRepository);
    return await subcategoryRepository.delete(id);
  }
}
