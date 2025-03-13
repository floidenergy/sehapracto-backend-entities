import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { HCP } from './hcp.entity'; // Assuming HCP entity exists
import { User } from './user.entity'; // Assuming User entity exists

@Entity('hcp_appointments')
export class HcpAppointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => HCP, (hcp) => hcp.id, { onDelete: 'CASCADE' })
  h_c_p: HCP;

  @Column({ type: 'varchar' })
  start: string;

  @Column({ type: 'varchar' })
  end: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  date: string;

  @Column({ type: 'timestamp', nullable: true })
  date_time_stamp: Date;

  @Column({ type: 'boolean', default: false })
  is_approved: boolean;

  @Column({ type: 'boolean', default: false })
  is_finished: boolean;

  @Column({ type: 'boolean', default: false })
  is_rejected: boolean;

  @Column({ type: 'int', default: 0 })
  status: number;

  @Column({ type: 'boolean', default: false })
  is_rated: boolean;

  @Column({ type: 'int', default: 0 })
  rating: number;

  @Column({ type: 'text', nullable: true })
  rating_comment: string;

  @Column({ type: 'text', nullable: true })
  reason_to_reject: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
