import { EntityRepository, Repository } from "typeorm";
import { Persons } from "../database/entities/persons.entity";

@EntityRepository(Persons)
export default class PersonRepository extends Repository<Persons>{}