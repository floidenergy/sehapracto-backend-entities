import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Language } from "./language.entity";
import { HCP } from "./hcp.entity";

@Entity("hcp_languages")
export class HCPLanguage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Language, (language) => language.id, { onDelete: "CASCADE" })
  language: Language;

  @ManyToOne(() => HCP, (hcp) => hcp.id, { onDelete: "CASCADE" })
  hcp: HCP;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
