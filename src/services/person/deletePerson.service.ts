import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/user.repository";

export class DeletePersonService {
  async execute(id: string): Promise<any> {
    const userRepository = getCustomRepository(UserRepository);
    return await userRepository.delete(id);
  }
}
