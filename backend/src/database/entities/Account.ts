import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Transaction from './Transaction';
import User from './User';

@Entity('Accounts')
export default class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('decimal', {default: 100})
  balance: number;

  @Column('text', {default: '001'})
  agency: string;

  @Column('text')
  number: string;

  @OneToMany(() => User, user => user.account)
  account: Account[];

  @OneToMany(() => Transaction, t => t.debit)
  debit: Account[];
  
  @OneToMany(() => Transaction, t => t.credit)
  credit: Account[];
}