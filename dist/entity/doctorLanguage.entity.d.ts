import { Language } from "./language.entity";
import { Doctor } from "./doctor.entity";
export declare class DoctorLanguage {
    id: number;
    language: Language;
    doctor: Doctor;
    createdAt: Date;
    updatedAt: Date;
}
