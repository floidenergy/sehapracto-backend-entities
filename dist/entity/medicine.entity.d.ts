import { Country } from './country.entity';
import { MedicineSubcategory } from './medicineSubcategory.entity';
export declare class Medicine {
    id: number;
    country: Country;
    medicineSubcategory: MedicineSubcategory;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    scientificName: string;
    routeAdmin: string;
    img: string;
    descriptionEn: string;
    descriptionAr: string;
    descriptionTr: string;
    price: number;
    isOtc: boolean;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
