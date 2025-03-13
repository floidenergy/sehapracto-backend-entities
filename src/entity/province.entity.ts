import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { City } from './city.entity';

@Entity('provinces')
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => City, { nullable: false, onDelete: 'CASCADE' })
  city: City;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  nameAr: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
