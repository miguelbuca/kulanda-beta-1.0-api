import { User } from "./user";

export class Interaction {
  public readonly id?: string;
  public liked: boolean;
  public userId: string;
  public user?: User;
}
