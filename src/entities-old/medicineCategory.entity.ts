import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("medicine_categories")
export class MedicineCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, unique: true })
  nameAr: string;

  @Column({ type: "varchar", length: 255, unique: true })
  nameEn: string;

  @Column({ type: "varchar", length: 255, unique: true })
  nameTr: string;

  @Column({ type: "varchar", length: 255 })
  img: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
