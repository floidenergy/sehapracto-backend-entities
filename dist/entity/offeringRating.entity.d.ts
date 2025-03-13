import { User } from './user.entity';
import { Offer } from './offer.entity';
export declare class OfferingRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    offeringId: number;
    offering: Offer;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
