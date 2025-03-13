import { Offer } from "./offer.entity";
export declare class OfferingSlideImg {
    id: number;
    offeringId: number;
    offering: Offer;
    imgPath: string;
    createdAt: Date;
    updatedAt: Date;
}
