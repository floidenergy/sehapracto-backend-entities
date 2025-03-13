import { DoctorPatientConversation } from "./doctorPatientConversation.entity";
export declare class DoctorPatientMessage {
    id: number;
    doctorPatientConversation: Promise<DoctorPatientConversation>;
    sender: string;
    message: string;
    msgType: string;
    fileLink: string;
    isSeen: boolean;
    createdAt: Date;
    updatedAt: Date;
}
