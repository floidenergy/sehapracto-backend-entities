import { Country } from './country.entity';
import { Doctor } from './doctor.entity';
export declare class Practice {
    id: number;
    country: Country;
    doctor: Doctor;
    name: string;
    img: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
}
