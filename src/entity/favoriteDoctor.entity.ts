import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from "./user.entity";
import { Doctor } from './doctor.entity';

@Entity('favorite_doctors')
export class FavoriteDoctor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
