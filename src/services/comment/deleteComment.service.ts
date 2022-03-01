import { getCustomRepository } from "typeorm";
import CommentRepository from "../../repositories/comment.repository";

export class DeleteCommentService {
  async execute(id: string): Promise<any> {
    const commentRepository = getCustomRepository(CommentRepository);
    return await commentRepository.delete(id);
  }
}
