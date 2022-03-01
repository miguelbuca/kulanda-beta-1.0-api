import { EntityRepository, Repository } from "typeorm";
import { Users } from "../database/entities/users.entity";

@EntityRepository(Users)
export default class UserRepository extends Repository<Users>{}