import { APP_TYPE } from '../types/userType.enum.cjs';
import { BaseEntity } from './baseEntity.entity.cjs';

declare class ApiKey extends BaseEntity {
    key: string;
    type: APP_TYPE;
    actif: boolean;
    description?: string;
    version: number;
}

export { ApiKey };
