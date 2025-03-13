import { User } from './user.entity';
import { HCP } from './hcp.entity';
export declare class HcpRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    hcpId: number;
    hcp: HCP;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
