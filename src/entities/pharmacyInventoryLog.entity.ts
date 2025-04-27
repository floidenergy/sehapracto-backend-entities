import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { StoreItem } from "./Storeitem.entity";

// PharmacyInventoryLogChangeType
export enum PHARMACY_INVENTORY_LOG_CHANGE_TYPE {
  ORDER = "ORDER",
  RETURN = "RETURN",
  MANUAL = "MANUAL",
}

@Entity("pharmacy_inventory_log")
export class PharmacyInventoryLog extends BaseEntity {
  @ManyToOne(() => StoreItem, { onDelete: "SET NULL" })
  @JoinColumn({ name: "itemId" })
  item?: StoreItem;

  @Column({
    type: "enum",
    enum: PHARMACY_INVENTORY_LOG_CHANGE_TYPE,
    default: PHARMACY_INVENTORY_LOG_CHANGE_TYPE.ORDER,
  })
  changeType: PHARMACY_INVENTORY_LOG_CHANGE_TYPE;

  @Column()
  quantityChange: number;
}
