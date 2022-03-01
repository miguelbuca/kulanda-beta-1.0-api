import { EntityRepository, Repository } from "typeorm";
import { Categories } from "../database/entities/categories.entity";

@EntityRepository(Categories)
export default class CategoryRepository extends Repository<Categories>{}