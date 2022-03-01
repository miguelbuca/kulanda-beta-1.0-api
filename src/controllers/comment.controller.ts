import { Comment } from "../models/comment";
import {
  CreateCommentService,
  UpdateCommentService,
  DeleteCommentService,
  GetCommentService,
} from "../services/comment";

export class CommentController {
  async index(): Promise<any> {
    const getCommentsService = new GetCommentService();
    return await getCommentsService.execute();
  }
  async store(payload: Comment): Promise<any> {
    try {
      const createCommentService = new CreateCommentService();

      const { identifiers } = await createCommentService.execute(payload);

      return {
        id: identifiers[0].id,
        ...payload,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async update(id: string, payload: Comment): Promise<any> {
      try {
        const updateCommentService = new UpdateCommentService();

        const result = await updateCommentService.execute(id, payload);

        return {
          id: result?.raw?.OkPacket?.insertedId,
          ...payload,
        };
      } catch (error) {
        throw new Error(`${error}`);
      }
  }
  async show(id: string): Promise<any> {
     try {
       const getCommentsService = new GetCommentService();
       return await getCommentsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
  async delete(id: string): Promise<any> {
     try {
       const deleteCommentsService = new DeleteCommentService();
       return await deleteCommentsService.execute(id);
     } catch (error) {
       throw new Error(`${error}`);
     }
  }
}
