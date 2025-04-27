import { Column, Entity } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";

@Entity("product_brand")
export class ProductBrand extends BaseEntity {
    @Column()
    name: string;

    @Column()
    logoId: number;
}