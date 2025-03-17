import { Department } from './entities/department.entity.cjs';
import { BaseEntity } from './entities/baseEntity.entity.cjs';
import { User } from './entities/user.entity.cjs';

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
