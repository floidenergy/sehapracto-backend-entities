import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";

@Entity("attachements")
export class Attachement extends BaseEntity {
  @Column()
  bucket_name: string;
  @Column({
    unique: true,
  })
  file_name: string;
  @Column()
  meme_type: string;
  @Column()
  size: string;
}
