import { LabRequest } from "./labRequest.entity";
import { LabTest } from "./labTest.entity";
export declare class LabRequestTest {
    id: number;
    labRequestId: number;
    labTestId: number;
    price: number;
    labRequest: LabRequest;
    labTest: LabTest;
    createdAt: Date;
    updatedAt: Date;
}
