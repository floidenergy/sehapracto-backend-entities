import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Client } from './client.entity';
import { Admin } from './admin.entity';

@Entity('user_transaction_records')
export class UserTransactionRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, { nullable: false, onDelete: 'CASCADE' })
  user: Client;

  @ManyToOne(() => Admin, { nullable: false, onDelete: 'CASCADE' })
  admin: Admin;

  @Column()
  type: string;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'int' })
  balanceBefore: number;

  @Column({ type: 'int' })
  balanceAfter: number;

  @Column('text')
  explanation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
