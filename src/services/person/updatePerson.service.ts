import { getCustomRepository } from "typeorm";
import { Person } from "../../models/person";
import PersonRepository from "../../repositories/person.repository";

export class UpdatePersonService {
  async execute(id: string, payload: Person): Promise<any> {
    const personRepository = getCustomRepository(PersonRepository);

    const person = await personRepository.findOne(id)

    if(!person)throw new Error('Person not found!')

    return await personRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
