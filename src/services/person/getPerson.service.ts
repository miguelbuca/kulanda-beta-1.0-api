import { getCustomRepository } from "typeorm";
import PersonRepository from "../../repositories/person.repository";

export class GetPersonService {
  async execute(id?: string): Promise<any> {
    const personRepository = getCustomRepository(PersonRepository);
    if (!id) {
      return await personRepository.find();
    }else{
      return await personRepository.findOne(id);
    }
  }
}
