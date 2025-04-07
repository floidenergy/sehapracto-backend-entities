import { BaseEntity } from './baseEntity.entity.js';
import { O as Order } from '../order.entity-Bb3fehf5.js';
import { Patient } from './patient.entity.js';
import { Attachement } from './attachements.entity.js';
import '../types/orderStatus.js';
import '../category.entity-XstyC_79.js';
import './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class Prescription extends BaseEntity {
    order: Order;
    patient: Patient;
    attachement: Attachement;
}

export { Prescription };
