import { Department } from './department.entity.cjs';
import { Permission } from './adminPermission.entity.cjs';
import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

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
