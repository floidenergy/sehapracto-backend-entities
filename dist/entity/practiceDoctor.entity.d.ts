import { Practice } from './practice.entity';
import { Doctor } from './doctor.entity';
export declare class PracticeDoctor {
    id: number;
    practice: Practice;
    doctor: Doctor;
    created_at: Date;
    updated_at: Date;
}
