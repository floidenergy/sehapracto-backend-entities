import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { HCP } from "./hcp.entity"; // Assuming HCP entity exists

@Entity("degrees")
export class Degree {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HCP, (hcp) => hcp.id, {
    onDelete: "CASCADE",
  })
  h_c_p: HCP;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  img: string;

  @Column({ type: "date" })
  degree_date: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
