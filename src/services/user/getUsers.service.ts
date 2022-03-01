import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/user.repository";

export class GetUsersService {
  async execute(id?: string): Promise<any> {
    const userRepository = getCustomRepository(UserRepository);
    if (!id) {
      return await userRepository.find();
    }else{
      return await userRepository.findOne(id);
    }
  }
}
