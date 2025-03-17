import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './client.entity';
import { Medicine } from './medicine.entity';

@Entity('cart_medicines')
export class CartMedicine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Medicine, { nullable: false, onDelete: 'CASCADE' })
  medicine: Medicine;

  @Column({ type: 'int', default: 1 })
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
