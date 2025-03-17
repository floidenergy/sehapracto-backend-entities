import { Department } from './entities/department.entity.js';
import { BaseEntity } from './entities/baseEntity.entity.js';
import { User } from './entities/user.entity.js';

declare class AdminPermission extends BaseEntity {
    name: string;
    admins: Admin[];
}

declare class Admin extends BaseEntity {
    department: Department;
    is_active: boolean;
    user: User;
    permissions: AdminPermission[];
}

export { Admin as A, AdminPermission as a };
