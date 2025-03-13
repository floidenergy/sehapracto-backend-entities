import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Practice } from './practice.entity';

@Entity('practice_locations')
export class PracticeLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Practice, (practice) => practice.id, { onDelete: 'CASCADE' })
  practice: Practice;

  @Column()
  location: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
