import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('failed_jobs')
export class FailedJob {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  uuid: string;

  @Column('text')
  connection: string;

  @Column('text')
  queue: string;

  @Column('longtext')
  payload: string;

  @Column('longtext')
  exception: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  failed_at: Date;
}
