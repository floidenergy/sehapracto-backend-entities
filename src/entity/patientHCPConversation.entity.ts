import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { HCP } from './hcp.entity';

@Entity('patient_hcp_conversations')
export class PatientHcpConversation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HCP, { nullable: false, onDelete: 'CASCADE' })
  hcp: HCP;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
