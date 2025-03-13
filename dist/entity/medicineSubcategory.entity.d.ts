import { MedicineCategory } from './medicineCategory.entity';
export declare class MedicineSubcategory {
    id: number;
    medicineCategory: MedicineCategory;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}
