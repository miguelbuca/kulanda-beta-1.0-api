import { getCustomRepository } from "typeorm";
import CommentRepository from "../../repositories/comment.repository";

export class GetCommentService {
  async execute(id?: string): Promise<any> {
    const commentRepository = getCustomRepository(CommentRepository);
    if (!id) {
      return await commentRepository.find();
    }else{
      return await commentRepository.findOne(id);
    }
  }
}
