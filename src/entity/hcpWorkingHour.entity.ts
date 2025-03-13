import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { HCP } from "./hcp.entity"; // Assuming HCP entity exists

@Entity("hcp_working_hours")
export class HcpWorkingHour {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HCP, (hcp) => hcp.id, { onDelete: "CASCADE" })
  h_c_p: HCP;

  @Column({ type: "varchar" })
  start: string;

  @Column({ type: "varchar" })
  end: string;

  @Column({ type: "varchar" })
  day_time: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
