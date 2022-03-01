import { getCustomRepository } from "typeorm";
import CategoryRepository from "../../repositories/category.repository";

export class GetCategoryService {
  async execute(id?: string): Promise<any> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    if (!id) {
      return await categoryRepository.find();
    }else{
      return await categoryRepository.findOne(id);
    }
  }
}
