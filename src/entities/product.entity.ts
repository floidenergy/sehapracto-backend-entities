import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { ProductCategory } from "./ProductCategory.entity";
import { ProductBrand } from "./ProductBrand.entity";

@Entity("products")
export class Product extends BaseEntity {
  @Column({
    nullable: true,
  })
  imageId: number;

  @Column()
  name: string;

  @Column()
  pharmacyId: number;

  @Column()
  businessId: number;

  @Column()
  sku: string;

  @ManyToOne(() => ProductCategory, { onDelete: "SET NULL" })
  @JoinColumn({ name: "categoryId" })
  category: ProductCategory;

  @ManyToOne(() => ProductBrand, { onDelete: "SET NULL" })
  @JoinColumn({ name: "BrandId" })
  brand: ProductBrand;

  @Column()
  requirePrescription: boolean;
  @Column()
  description: string;
  // @Column({ unsigned: true })
  // price: number;

  @Column({ unsigned: true })
  basePrice: number;
}
