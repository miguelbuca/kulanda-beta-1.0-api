import { EntityRepository, Repository } from "typeorm";
import { BankAccounts } from "../database/entities/bankaccounts.entity";

@EntityRepository(BankAccounts)
export default class BankAccountRepository extends Repository<BankAccounts>{}