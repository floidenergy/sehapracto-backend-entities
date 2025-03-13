export declare class HospitalAppointment {
    id: number;
    user_id: number;
    hospital_id: number;
    hospital_department_id: number;
    hospital_doctor_id: number;
    time: string;
    date: string;
    status: number;
    is_rated: boolean;
    rating: number;
    rating_comment: string;
    price: number;
    booked_by: string;
    date_time_stamp: Date;
    created_at: Date;
    updated_at: Date;
}
