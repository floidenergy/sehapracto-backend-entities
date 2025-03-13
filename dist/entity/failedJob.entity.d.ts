export declare class FailedJob {
    id: number;
    uuid: string;
    connection: string;
    queue: string;
    payload: string;
    exception: string;
    failed_at: Date;
}
