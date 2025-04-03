import { BaseEntity } from './baseEntity.entity.js';
import { a as Order } from '../order.entity-i9Ta1Ybf.js';
import { Patient } from './patient.entity.js';
import { Attachement } from './attachements.entity.js';
import './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';
import '../category.entity-XstyC_79.js';

declare class Prescription extends BaseEntity {
    order: Order;
    customer: Patient;
    attachement: Attachement;
}

export { Prescription };
