import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Transaction from './Transaction';
import User from './User';

@Entity('Accounts')
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  balance: string;

  @OneToMany(() => User, user => user.account)
  account: Account[];

  @OneToMany(() => Transaction, t => t.debit)
  debit: Account[];
  
  @OneToMany(() => Transaction, t => t.credit)
  credit: Account[];
}