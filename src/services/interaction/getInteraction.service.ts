import { getCustomRepository } from "typeorm";
import InteractionRepository from "../../repositories/interaction.repository";

export class GetInteractionService {
  async execute(id?: string): Promise<any> {
    const interactionRepository = getCustomRepository(InteractionRepository);
    if (!id) {
      return await interactionRepository.find();
    }else{
      return await interactionRepository.findOne(id);
    }
  }
}
