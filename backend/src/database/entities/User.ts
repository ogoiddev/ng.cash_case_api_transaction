import {
  Column,
  Entity,
  JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';
import { MinLength } from 'class-validator'

@Entity('Users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text' })
  @MinLength(3)
  userName: string;

  @Column({ type: 'text' })
  password: string;

  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
