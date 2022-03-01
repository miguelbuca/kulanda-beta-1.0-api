import { EntityRepository, Repository } from "typeorm";
import { Products } from "../database/entities/products.entity";

@EntityRepository(Products)
export default class ProductRepository extends Repository<Products>{}