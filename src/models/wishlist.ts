import { User } from "./user";

export class WishList {
  public readonly id?: string;
  public keyword: string;
  public min_price: number;
  public max_price: number;
  public userId: string;
  public user?: User;
}
