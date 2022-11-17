import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './Account';

@Entity('Transactions')
export default class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'debited_account_id' })
  debit: Account;

  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'credited_account_id' })
  credit: Account;

  @Column({ type: "decimal" })
  value: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

}