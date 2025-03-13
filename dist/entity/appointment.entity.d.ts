import { User } from "./user.entity";
import { Doctor } from "./doctor.entity";
export declare class Appointment {
    id: number;
    user: User;
    doctor: Doctor;
    start: string;
    end: string;
    type: string;
    date: string;
    date_time_stamp: Date;
    is_approved: boolean;
    is_finished: boolean;
    is_rejected: boolean;
    status: number;
    is_rated: boolean;
    rating: number;
    rating_comment: string;
    reason_to_reject: string;
    created_at: Date;
    updated_at: Date;
}
