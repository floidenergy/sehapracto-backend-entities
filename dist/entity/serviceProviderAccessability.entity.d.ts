import { OfferAccessibility } from "./offerAccessability.entity";
import { ServiceProvider } from "./serviceProvider.entity";
export declare class ServiceProviderAccessability {
    id: number;
    offerAccessability: OfferAccessibility;
    serviceProvider: ServiceProvider;
    createdAt: Date;
    updatedAt: Date;
}
