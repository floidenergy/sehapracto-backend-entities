import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { HCP } from './hcp.entity';
import { Admin } from './admin.entity';

@Entity('hcp_transaction_records')
export class HcpTransactionRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HCP, { nullable: false, onDelete: 'CASCADE' })
  healthcareProvider: HCP;

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
