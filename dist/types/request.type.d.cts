import { Request } from 'express';
import { APP_TYPE } from './userType.enum.cjs';
import { Admin } from '../entities/admin.entity.cjs';
import { Session } from '../entities/session.entity.cjs';
import { User } from '../entities/user.entity.cjs';
import '../entities/department.entity.cjs';
import '../entities/baseEntity.entity.cjs';
import '../entities/adminPermission.entity.cjs';
import '../entities/country.entity.cjs';

interface PublicRequest extends Request {
    appType: APP_TYPE;
}
interface ProtectedRequest extends PublicRequest {
    session: Session;
    user: User & Admin;
}

export type { ProtectedRequest, PublicRequest };
