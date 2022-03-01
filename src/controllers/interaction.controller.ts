import { Interaction } from "../models/interaction";
import {
  CreateInteractionService,
  UpdateInteractionService,
  DeleteInteractionService,
  GetInteractionService,
} from "../services/interaction";

export class InteractionController {
  async index(): Promise<any> {
    const getInteractionsService = new GetInteractionService();
    return await getInteractionsService.execute();
  }
  async store(payload: Interaction): Promise<any> {
    try {
      const createInteractionService = new CreateInteractionService();

      const { identifiers } = await createInteractionService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Interaction): Promise<any> {
      try {
        const updateInteractionService = new UpdateInteractionService();

        const result = await updateInteractionService.execute(id, payload);

        return {
          id: result?.raw?.OkPacket?.insertedId,
          ...payload,
        };
      } catch (error) {
        throw new Error(`${error}`);
      }
  }
  async show(id: string): Promise<any> {
     try {
       const getInteractionsService = new GetInteractionService();
       return await getInteractionsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteInteractionsService = new DeleteInteractionService();
       return await deleteInteractionsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
