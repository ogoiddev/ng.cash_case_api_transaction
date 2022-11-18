import {
  Column,
  Entity,
  JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique,
} from 'typeorm';
import Account from './Account';
import { Matches, MinLength } from 'class-validator'

@Entity('Users')
@Unique(['userName'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text' , unique: true})
  @MinLength(3)
  userName: string;

  @Column({ type: 'text' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,20}$)/g)
  password: string;

  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
