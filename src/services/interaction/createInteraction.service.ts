import { getCustomRepository } from "typeorm";
import { Interaction } from "../../models/interaction";
import InteractionRepository from "../../repositories/interaction.repository";
export class CreateInteractionService{ 
    async execute(payload: Interaction): Promise<any> {

        const interactionRepository = getCustomRepository(
            InteractionRepository
        )

        return await interactionRepository.insert(payload);
    }
}