import { User } from './user.entity';
import { OfferingCoupon } from './offeringCoupon.entity';
import { Offer } from './offer.entity';
import { ServiceProvider } from './serviceProvider.entity';
export declare class UserCoupon {
    id: number;
    userId: number;
    user: User;
    offeringCouponId: number;
    offeringCoupon: OfferingCoupon;
    offeringId: number;
    offering: Offer;
    serviceProviderId: number;
    serviceProvider: ServiceProvider;
    maxAllowedUses: number;
    numberUsed: number;
    status: number;
    frequency: number;
    uniqueCode: string;
    lastUsed: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
