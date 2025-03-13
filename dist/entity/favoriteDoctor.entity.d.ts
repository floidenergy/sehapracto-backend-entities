import { User } from "./user.entity";
import { Doctor } from './doctor.entity';
export declare class FavoriteDoctor {
    id: number;
    user: User;
    doctor: Doctor;
    created_at: Date;
    updated_at: Date;
}
