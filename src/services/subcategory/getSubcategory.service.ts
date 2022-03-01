import { getCustomRepository } from "typeorm";
import SubcategoryRepository from "../../repositories/subcategory.repository";

export class GetSubcategoryService {
  async execute(id?: string): Promise<any> {
    const subcategoryRepository = getCustomRepository(SubcategoryRepository);
    if (!id) {
      return await subcategoryRepository.find();
    }else{
      return await subcategoryRepository.findOne(id);
    }
  }
}
