import { getCustomRepository } from "typeorm";
import { Comment } from "../../models/comment";
import CommentRepository from "../../repositories/comment.repository";

export class UpdateCommentService {
  async execute(id: string, payload: Comment): Promise<any> {
    const commentRepository = getCustomRepository(CommentRepository);

    const Comment = await commentRepository.findOne(id)

    if(!Comment)throw new Error('Comment not found!')

    return await commentRepository.update({
      id
    }, {
      id,
      ...payload,
    });
  }
}
