import { Department } from './department.entity.js';
import { Permission } from './adminPermission.entity.js';
import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';

declare class Admin {
    adminID: number;
    department: Department;
    isActive: boolean;
    user: User;
    permissions: Permission[];
    readonly adminCreatedAt: Date;
    readonly adminUpdatedAt: Date;
    readonly adminDeletedAt: Date;
}

export { Admin };
