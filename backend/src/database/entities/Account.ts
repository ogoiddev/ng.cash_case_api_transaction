import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Transaction from './Transaction';
import User from './User';

@Entity('Accounts')
export default class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ default: 10000 })
  balance: number;

  @Column('text', {default: '001'})
  agency: string;

  @Column({ type: 'text' })
  number: string;

  @OneToOne(() => User, user => user.account)
  account: User;

  @OneToMany(() => Transaction, t => t.debitAccount, { eager: true })
  debitAccountId: Transaction[];
  
  @OneToMany(() => Transaction, t => t.creditAccount, { eager: true })
  creditAccountId: Transaction[];
}