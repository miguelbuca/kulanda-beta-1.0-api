import { getCustomRepository } from "typeorm";
import InteractionRepository from "../../repositories/interaction.repository";

export class DeleteInteractionService {
  async execute(id: string): Promise<any> {
    const interactionRepository = getCustomRepository(InteractionRepository);
    return await interactionRepository.delete(id);
  }
}
