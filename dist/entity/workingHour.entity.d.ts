import { Doctor } from './doctor.entity';
export declare class WorkingHour {
    id: number;
    doctor: Doctor;
    start: string;
    end: string;
    day_time: string;
    created_at: Date;
    updated_at: Date;
}
