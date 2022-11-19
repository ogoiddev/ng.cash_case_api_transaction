import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';
import Account from './Account';

@Entity('Transactions')
export default class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  debited_account_id: string
  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'debited_account_id' })
  debitAccount: Account;

  @Column()
  credited_account_id: string
  @ManyToOne(() => Account, account => account.account)
  @JoinColumn({ name: 'credited_account_id' })
  creditAccount: Account;

  @Column({ type: "decimal" })
  value: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

}