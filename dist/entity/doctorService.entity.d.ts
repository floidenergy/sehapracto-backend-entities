import { Doctor } from "./doctor.entity";
import { DoctorDepartmentService } from "./doctorDepartmentService.entity";
export declare class DoctorService {
    id: number;
    doctor: Doctor;
    doctorDepartmentService: DoctorDepartmentService;
    fee: number;
    createdAt: Date;
    updatedAt: Date;
}
