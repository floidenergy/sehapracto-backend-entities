import { BaseEntity } from './baseEntity.entity.cjs';
import { a as Order } from '../order.entity-CA8sr2wJ.cjs';
import { Patient } from './patient.entity.cjs';
import { Attachement } from './attachements.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';
import '../category.entity-DugzkOj6.cjs';

declare class Prescription extends BaseEntity {
    order: Order;
    customer: Patient;
    attachement: Attachement;
}

export { Prescription };
