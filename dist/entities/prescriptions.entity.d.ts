import { BaseEntity } from './baseEntity.entity.js';
import { O as Order } from '../order.entity-C2AagUHV.js';
import { Patient } from './patient.entity.js';
import { Attachement } from './attachements.entity.js';
import '../types/orderStatus.js';
import '../category.entity-DtJYY43Y.js';
import './user.entity.js';
import './country.entity.js';

declare class Prescription extends BaseEntity {
    order: Order;
    patient: Patient;
    attachement: Attachement;
}

export { Prescription };
