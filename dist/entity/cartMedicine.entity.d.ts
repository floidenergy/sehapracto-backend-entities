import { User } from './user.entity';
import { Medicine } from './medicine.entity';
export declare class CartMedicine {
    id: number;
    user: User;
    medicine: Medicine;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}
