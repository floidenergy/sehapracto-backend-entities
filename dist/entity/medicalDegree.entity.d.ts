import { Doctor } from './doctor.entity';
export declare class MedicalDegree {
    id: number;
    doctor: Doctor;
    title: string;
    img: string;
    degree_date: string;
    created_at: Date;
    updated_at: Date;
}
