import { Doctor } from './doctor.entity';
import { Hospital } from './hospital.entity';
export declare class DoctorWorkLocation {
    id: number;
    doctor: Doctor;
    hospital: Hospital;
    name: string;
    nameAr: string;
    nameEn: string;
    nameTr: string;
    phone: string;
    address: string;
    addressAr: string;
    addressEn: string;
    addressTr: string;
    createdAt: Date;
    updatedAt: Date;
}
