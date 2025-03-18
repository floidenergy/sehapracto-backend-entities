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
    readonly createdAt: Date;
    readonly updatedAt: Date;
    deletedAt: Date;
}

export { Admin };
