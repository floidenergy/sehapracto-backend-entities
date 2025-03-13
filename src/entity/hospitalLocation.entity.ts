import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Hospital } from './hospital.entity';

@Entity('hospital_locations')
export class HospitalLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hospital, (hospital) => hospital.id, { onDelete: 'CASCADE' })
  hospital: Hospital;

  @Column()
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
