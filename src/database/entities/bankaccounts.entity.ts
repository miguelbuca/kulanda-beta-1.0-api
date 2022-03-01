import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Banks } from './banks.entity';
import { Persons } from './persons.entity';

@Entity()
export class BankAccounts extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  iban: string;

  @Column({
    nullable: true,
  })
  owner_name: string;

  @Column({
    type: "decimal",
  })
  current_balance: number;

  @Column("uuid")
  personId: string;

  @OneToOne(() => Persons, (person) => person.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  person: Persons;

  @Column("uuid")
  bankId: string;

  @OneToOne(() => Banks, (bank) => bank.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  bank: Banks;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;
}