import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { HCP } from './hcp.entity';

@Entity('hcp_notifications')
export class HcpNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HCP, { nullable: false, onDelete: 'CASCADE' })
  healthcareProvider: HCP;

  @Column()
  title: string;

  @Column()
  titleAr: string;

  @Column()
  context: string;

  @Column()
  contextAr: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
