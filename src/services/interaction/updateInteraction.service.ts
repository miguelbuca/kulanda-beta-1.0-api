import { getCustomRepository } from "typeorm";
import { Interaction } from "../../models/interaction";
import InteractionRepository from "../../repositories/interaction.repository";

export class UpdateInteractionService {
  async execute(id: string, payload: Interaction): Promise<any> {
    const interactionRepository = getCustomRepository(InteractionRepository);

    const Interaction = await interactionRepository.findOne(id)

    if(!Interaction)throw new Error('Interaction not found!')

    return await interactionRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
