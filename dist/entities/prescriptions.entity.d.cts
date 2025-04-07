import { BaseEntity } from './baseEntity.entity.cjs';
import { O as Order } from '../order.entity-CaLYRmfb.cjs';
import { Patient } from './patient.entity.cjs';
import { Attachement } from './attachements.entity.cjs';
import '../types/orderStatus.cjs';
import '../category.entity-DugzkOj6.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class Prescription extends BaseEntity {
    order: Order;
    patient: Patient;
    attachement: Attachement;
}

export { Prescription };
