import { Offer } from "./offer.entity";
import { OfferCategory } from "./offerCategory.entity";
export declare class OfferingSelectedCategory {
    id: number;
    offeringId: number;
    offering: Offer;
    offerCategoryId: number;
    offerCategory: OfferCategory;
    createdAt: Date;
    updatedAt: Date;
}
