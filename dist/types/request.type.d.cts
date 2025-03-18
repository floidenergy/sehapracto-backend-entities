import { APP_TYPE } from './userType.enum.cjs';
import { Session } from '../entities/session.entity.cjs';
import '../entities/user.entity.cjs';
import '../entities/baseEntity.entity.cjs';
import '../entities/country.entity.cjs';

interface PublicRequest extends Request {
    appType: APP_TYPE;
}
interface ProtectedRequest extends PublicRequest {
    session: Session;
}

export type { ProtectedRequest, PublicRequest };
