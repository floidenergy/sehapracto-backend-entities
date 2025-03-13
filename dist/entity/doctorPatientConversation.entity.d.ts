import { Doctor } from './doctor.entity';
import { User } from './user.entity';
import { DoctorPatientMessage } from './doctorPatientMessage.entity';
export declare class DoctorPatientConversation {
    id: number;
    doctor: Doctor;
    user: User;
    messages: DoctorPatientMessage[];
    createdAt: Date;
    updatedAt: Date;
}
