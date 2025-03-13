import { User } from './user.entity';
import { Doctor } from './doctor.entity';
export declare class DoctorRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    doctorId: number;
    doctor: Doctor;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
