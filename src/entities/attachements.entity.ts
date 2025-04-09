import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";

@Entity("attachements")
export class Attachement extends BaseEntity {
  @Column()
  bucketName: string;
  @Column({
    unique: true,
  })
  fileName: string;
  @Column()
  memeType: string;
  @Column()
  size: string;
}
