import {
  Column,
  Entity,
  JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique,
} from 'typeorm';
import Account from './Account';
import { Matches, MaxLength, MinLength } from 'class-validator'

@Entity('Users')
@Unique(['userName', 'password'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' , unique: true, nullable: true})
  @MinLength(3)
  @MaxLength(20)
  userName: string;

  @Column({ type: 'text' , unique: true, nullable: true})
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,20}$)/g)
  password: string;

  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
