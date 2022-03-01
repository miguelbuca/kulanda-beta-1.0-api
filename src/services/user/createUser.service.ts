import { getCustomRepository } from "typeorm";
import { User } from "../../models/user";
import UserRepository from "../../repositories/user.repository";
import bcrypt from 'bcryptjs'
export class CreateUserService{ 
    async execute(payload: User): Promise<any> {
        const { password, name, email } = payload
        const userRepository = getCustomRepository(
            UserRepository
        )

        if(name.indexOf(' ') > 0) throw new Error('The user name can not have space') 

        const encryptPassword = await bcrypt.hash(password,10)
        return await userRepository.insert({
            password: encryptPassword,
            name,
            email
        });
    }
}