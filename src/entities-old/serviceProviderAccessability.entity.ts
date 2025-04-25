import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { OfferAccessibility } from "./offerAccessability.entity"; // Assuming OfferAccessability is defined in another file
import { ServiceProvider } from "./serviceProvider.entity"; // Assuming ServiceProvider is defined in another file

@Entity("service_provider_accessabilities")
export class ServiceProviderAccessability {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => OfferAccessibility,
    (accessability) => accessability.id
  )
  // @JoinColumn({ name: "offer_accessability_id" })
  offerAccessability: OfferAccessibility;

  @ManyToOne(() => ServiceProvider, (provider) => provider.id)
  // @JoinColumn({ name: "service_provider_id" })
  serviceProvider: ServiceProvider;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
