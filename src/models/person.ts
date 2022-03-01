import { Stores } from "../database/entities/stores.entity";
import { Users } from "../database/entities/users.entity";

export class Person {
  public readonly id?: string;
  public fullname: string;
  public type: string;
  public website: string;
  public profile_image: string;
  public userId: string;
  public user?: Users;
  public store?: Stores[];
}
