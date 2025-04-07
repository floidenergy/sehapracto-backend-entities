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
    readonly admin_createdAt: Date;
    readonly admin_updatedAt: Date;
    admin_deletedAt: Date;
}

export { Admin };
