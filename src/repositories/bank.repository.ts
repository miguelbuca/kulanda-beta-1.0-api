import { EntityRepository, Repository } from "typeorm";
import { Banks } from "../database/entities/banks.entity";

@EntityRepository(Banks)
export default class BankRepository extends Repository<Banks>{}