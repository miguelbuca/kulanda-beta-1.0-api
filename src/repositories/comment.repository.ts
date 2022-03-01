import { EntityRepository, Repository } from "typeorm";
import { Comments } from "../database/entities/comments.entity";

@EntityRepository(Comments)
export default class CommentRepository extends Repository<Comments>{}