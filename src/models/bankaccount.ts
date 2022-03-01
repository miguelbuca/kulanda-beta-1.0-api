import { Banks } from "../database/entities/banks.entity";
import { Persons } from "../database/entities/persons.entity";

export class BankAccount {
  public readonly id?: string;
  public iban: string;
  public owner_name: string;
  public current_balance: number;
  public personId: string;
  public person?: Persons;
  public bankId: string;
  public bank?: Banks;
}
