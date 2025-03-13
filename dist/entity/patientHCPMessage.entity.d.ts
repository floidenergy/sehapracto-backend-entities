import { PatientHcpConversation } from "./patientHCPConversation.entity";
export declare class PatientHcpMessage {
    id: number;
    patientHcpConversation: PatientHcpConversation;
    sender: string;
    message: string;
    msgType: string;
    fileLink: string;
    isSeen: boolean;
    createdAt: Date;
    updatedAt: Date;
}
