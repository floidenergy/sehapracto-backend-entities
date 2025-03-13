import { InsuranceCompany } from "./insuranceCompany.entity";
import { Practice } from "./practice.entity";
export declare class PracticeInsurance {
    id: number;
    insuranceCompany: InsuranceCompany;
    practice: Practice;
    created_at: Date;
    updated_at: Date;
}
