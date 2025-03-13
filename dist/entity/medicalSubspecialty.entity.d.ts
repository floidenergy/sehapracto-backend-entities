import { MedicalSpecialty } from "./medicalSpecialty.entity";
export declare class MedicalSubspecialty {
    id: number;
    medicalSpecialty: MedicalSpecialty;
    name: string;
    name_ar: string;
    name_tr: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
