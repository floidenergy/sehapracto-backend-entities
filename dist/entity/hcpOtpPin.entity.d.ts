import { Doctor } from "./doctor.entity";
export declare class DoctorOtpPin {
    id: number;
    doctor: Doctor;
    pin: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
