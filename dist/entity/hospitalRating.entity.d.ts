import { User } from './user.entity';
import { Hospital } from './hospital.entity';
export declare class HospitalRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    hospitalId: number;
    hospital: Hospital;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
