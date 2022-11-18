import { Matches, MaxLength, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique
} from 'typeorm';
import Account from './Account';

@Entity('Users')
@Unique(['userName', 'password'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_name', type: 'text' , unique: true})
  @MinLength(3)
  @MaxLength(20)
  userName: string;

  @Column({ type: 'text' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,60}$)/g)
  password: string;

  @OneToOne(() => Account, account => account.account, { eager: true })
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
