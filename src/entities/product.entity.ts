import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { ProductCategory } from "./ProductCategory.entity";
import { ProductBrand } from "./ProductBrand.entity";

@Entity("products")
export class Product extends BaseEntity {
  @Column()
  imageId: number;

  @Column()
  name: string;

  @Column()
  description: string;

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

  @Column({ unsigned: true })
  basePrice: number;
}
