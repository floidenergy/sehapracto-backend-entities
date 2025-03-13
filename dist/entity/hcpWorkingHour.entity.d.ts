import { HCP } from "./hcp.entity";
export declare class HcpWorkingHour {
    id: number;
    h_c_p: HCP;
    start: string;
    end: string;
    day_time: string;
    created_at: Date;
    updated_at: Date;
}
