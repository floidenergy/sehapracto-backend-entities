import { Doctor } from './doctor.entity';
export declare class DoctorNotification {
    id: number;
    doctor: Doctor;
    title: string;
    titleAr: string;
    context: string;
    contextAr: string;
    createdAt: Date;
    updatedAt: Date;
}
