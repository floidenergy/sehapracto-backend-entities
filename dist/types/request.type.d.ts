import { APP_TYPE } from './userType.enum.js';
import { Session } from '../entities/session.entity.js';
import '../entities/user.entity.js';
import '../entities/baseEntity.entity.js';
import '../entities/country.entity.js';

interface PublicRequest extends Request {
    appType: APP_TYPE;
}
interface ProtectedRequest extends PublicRequest {
    session: Session;
}

export type { ProtectedRequest, PublicRequest };
