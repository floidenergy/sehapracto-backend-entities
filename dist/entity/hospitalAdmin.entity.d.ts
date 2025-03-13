import { Hospital } from "./hospital.entity";
export declare class HospitalAdmin {
    id: number;
    hospital: Hospital;
    countryId: string;
    firstName: string;
    lastName: string;
    email: string;
    emailVerifiedAt: Date | null;
    phone: string;
    phoneVerifiedAt: Date | null;
    password: string;
    profileImg: string;
    isActive: boolean;
    isOwner: boolean;
    rememberToken: string;
    createdAt: Date;
    updatedAt: Date;
}
