import { Column, Entity } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";

@Entity("attachements")
export class Attachement extends BaseEntity {
  @Column()
  bucketName: string;
  
  @Column({
    unique: true,
  })
  fileName: string;

  @Column()
  mimeType: string;

  @Column()
  size: number;
}
