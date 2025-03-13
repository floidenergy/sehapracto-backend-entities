import { HCP } from './hcp.entity';
export declare class HcpNotification {
    id: number;
    healthcareProvider: HCP;
    title: string;
    titleAr: string;
    context: string;
    contextAr: string;
    createdAt: Date;
    updatedAt: Date;
}
