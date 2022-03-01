import { Persons } from "../database/entities/persons.entity";

export class Store {
  public readonly id?: string;
  public name: string;
  public website: string;
  public logo: string;
  public personId: string;
  public person?: Persons;
}
