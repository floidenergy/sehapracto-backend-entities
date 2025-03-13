import { Country } from './country.entity';
import { City } from './city.entity';
export declare class Pharmacy {
    id: number;
    country: Country;
    city: City;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
