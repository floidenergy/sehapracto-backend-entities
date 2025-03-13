import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_notifications')
export class UserNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  user: User;

  @Column()
  title: string;

  @Column()
  titleAr: string;

  @Column()
  context: string;

  @Column()
  contextAr: string;

  @Column({ nullable: true })
  action: string;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
