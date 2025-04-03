import { Entity } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";

@Entity("attachements")
export class Attachement extends BaseEntity {
  bucket_name: string;
  file_name: string;
  meme_type: string;
  size: string;
}
