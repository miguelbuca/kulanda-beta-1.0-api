import { EntityRepository, Repository } from "typeorm";
import { Subcategories } from "../database/entities/subcategories.entity";

@EntityRepository(Subcategories)
export default class SubcategoryRepository extends Repository<Subcategories>{}