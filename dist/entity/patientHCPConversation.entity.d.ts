import { User } from './user.entity';
import { HCP } from './hcp.entity';
export declare class PatientHcpConversation {
    id: number;
    hcp: HCP;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
