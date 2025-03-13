import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { LabRequest } from "./labRequest.entity";
import { LabTest } from "./labTest.entity";

@Entity("lab_request_tests")
export class LabRequestTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  labRequestId: number;

  @Column("int")
  labTestId: number;

  @Column("int")
  price: number;

  @ManyToOne(() => LabRequest, (labRequest) => labRequest.id)
  @JoinColumn({ name: "lab_request_id" })
  labRequest: LabRequest;

  @ManyToOne(() => LabTest, (labTest) => labTest.id)
  @JoinColumn({ name: "lab_test_id" })
  labTest: LabTest;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
