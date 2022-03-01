import { Interaction } from "./interaction";

export class Comment {
  public readonly id?: string;
  public message: string;
  public interactionId: string;
  public interaction?: Interaction;
}
