import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Admin } from './admin.entity';

@Entity('doctor_transaction_records')
export class DoctorTransactionRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: 'CASCADE' })
  doctor: Doctor;

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
