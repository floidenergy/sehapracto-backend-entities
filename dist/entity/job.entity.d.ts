export declare class Job {
    id: number;
    queue: string;
    payload: string;
    attempts: number;
    reserved_at: number | null;
    available_at: number;
    created_at: number;
}
