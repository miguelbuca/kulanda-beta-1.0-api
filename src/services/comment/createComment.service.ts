import { getCustomRepository } from "typeorm";
import { Comment } from "../../models/comment";
import CommentRepository from "../../repositories/comment.repository";
export class CreateCommentService{ 
    async execute(payload: Comment): Promise<any> {

        const commentRepository = getCustomRepository(
            CommentRepository
        )

        return await commentRepository.insert(payload);
    }
}