import { Language } from "./language.entity";
import { HCP } from "./hcp.entity";
export declare class HCPLanguage {
    id: number;
    language: Language;
    hcp: HCP;
    createdAt: Date;
    updatedAt: Date;
}
