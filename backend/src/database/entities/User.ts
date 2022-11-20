import { Matches, MaxLength, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique
} from 'typeorm';
import Account from './Account';

@Entity('Users')
@Unique(['user_name'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' , unique: true})
  @MinLength(3)
  @MaxLength(20)
  user_name: string;

  @Column({ type: 'text' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,60}$)/g)
  password: string;

  @Column({ default: 'user', nullable: false })
  role: string;

  @Column()
  account_id: string
  @OneToOne(() => Account, account => account.account, { eager: true })
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
