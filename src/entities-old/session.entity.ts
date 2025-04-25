import { Entity, PrimaryColumn, Column, Index, ManyToOne } from 'typeorm';
import { User } from './client.entity'; // Assuming there's a User entity

@Entity('sessions')
export class Session {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: true, onDelete: 'CASCADE' })
  @Index()
  user_id: User;

  @Column({ type: 'varchar', length: 45, nullable: true })
  ip_address: string | null;

  @Column({ type: 'text', nullable: true })
  user_agent: string | null;

  @Column({ type: 'text' })
  payload: string;

  @Column({ type: 'int' })
  @Index()
  last_activity: number;
}
