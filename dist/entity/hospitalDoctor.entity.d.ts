import { Doctor } from './doctor.entity';
import { Hospital } from './hospital.entity';
import { HospitalDepartment } from './hospitalDepartment.entity';
export declare class HospitalDoctor {
    id: number;
    doctor: Doctor;
    hospital: Hospital;
    hospitalDepartment: HospitalDepartment;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
