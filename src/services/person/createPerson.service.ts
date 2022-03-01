import { getCustomRepository } from "typeorm";
import { Person } from "../../models/person";
import PersonRepository from "../../repositories/person.repository";
export class CreatePersonService{ 
    async execute(payload: Person): Promise<any> {

        const personRepository = getCustomRepository(
            PersonRepository
        )

        return await personRepository.insert(payload);
    }
}