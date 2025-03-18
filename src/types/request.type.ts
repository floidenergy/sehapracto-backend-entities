import { Request } from "@nestjs/common";
import { APP_TYPE } from "./userType.enum";
import { Session } from "../entities";

export interface PublicRequest extends Request {
  appType: APP_TYPE;
}

export interface ProtectedRequest extends PublicRequest {
  session: Session;
}
