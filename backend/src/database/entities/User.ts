import {
  Column,
  Entity,
  JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';

@Entity('Users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  userName: string;

  @Column({ type: 'text' })
  password: string;

  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
