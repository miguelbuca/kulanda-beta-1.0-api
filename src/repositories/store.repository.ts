import { EntityRepository, Repository } from "typeorm";
import { Stores } from "../database/entities/stores.entity";

@EntityRepository(Stores)
export default class UserRepository extends Repository<Stores>{}