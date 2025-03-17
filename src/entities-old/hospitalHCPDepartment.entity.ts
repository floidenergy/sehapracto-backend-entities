import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("hospital_hcp_departments")
export class HospitalHcpDepartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  hospital_id: number;

  @Column({ type: "int" })
  specialty_id: number;

  @Column({ type: "boolean", default: false })
  is_hidden: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
