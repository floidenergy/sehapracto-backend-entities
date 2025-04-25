import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { InsuranceCompany } from "./insuranceCompany.entity";
import { Practice } from "./practice.entity";

@Entity("practice_insurances")
export class PracticeInsurance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => InsuranceCompany,
    (insuranceCompany) => insuranceCompany.id,
    { onDelete: "CASCADE" }
  )
  insuranceCompany: InsuranceCompany;

  @ManyToOne(() => Practice, (practice) => practice.id, { onDelete: "CASCADE" })
  practice: Practice;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
