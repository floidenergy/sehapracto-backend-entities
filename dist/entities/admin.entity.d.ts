import { Department } from './department.entity.js';
import { Permission } from './adminPermission.entity.js';
import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class Admin {
    adminID: number;
    department: Department;
    is_active: boolean;
    user: User;
    permissions: Permission[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    deletedAt: Date;
}

export { Admin };
