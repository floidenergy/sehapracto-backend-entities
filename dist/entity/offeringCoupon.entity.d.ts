import { Offer } from "./offer.entity";
import { Membership } from "./membership.entity";
import { DiscountType } from "./discountType.entity";
export declare class OfferingCoupon {
    id: number;
    offeringId: number;
    offering: Offer;
    membershipId: number;
    membership: Membership;
    discountTypeId: number;
    discountType: DiscountType;
    title: string;
    howToUse: string;
    price: number;
    numberUses: number;
    useFrequency: number;
    savedAmount: number;
    discountPercentage: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
