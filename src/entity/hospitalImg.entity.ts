import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Hospital } from './hospital.entity';

@Entity('hospital_imgs')
export class HospitalImg {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hospital, (hospital) => hospital.id, { onDelete: 'CASCADE' })
  hospital: Hospital;

  @Column()
  img: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
