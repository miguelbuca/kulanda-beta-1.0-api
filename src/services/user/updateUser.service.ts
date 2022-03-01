import { getCustomRepository } from "typeorm";
import { User } from "../../models/user";
import UserRepository from "../../repositories/user.repository";

export class UpdateUserService {
  async execute(id: string, payload: User): Promise<any> {
    const { password, ...args } = payload;
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id)

    if(!user)throw new Error('User not found!')

    return await userRepository.update({
      id
    }, {
      id,
      ...args,
    });
  }
}
