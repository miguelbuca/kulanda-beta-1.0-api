import { Store } from "./store";
import { Subcategory } from "./subcategory";

export class Product {
  public readonly id?: string;
  public name: string;
  public image: string;
  public description: string;
  public price: number;
  public promotion: boolean;
  public new_price: number;
  public subcategoryId: string;
  public subcategory?: Subcategory;
  public storeId: string;
  public store?: Store
}
