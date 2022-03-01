import { EntityRepository, Repository } from "typeorm";
import { Interactions } from "../database/entities/interactions.entity";

@EntityRepository(Interactions)
export default class InteractionRepository extends Repository<Interactions>{}