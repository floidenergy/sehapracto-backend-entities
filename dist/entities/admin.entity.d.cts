import { Department } from './department.entity.cjs';
import { Permission } from './adminPermission.entity.cjs';
import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';

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
