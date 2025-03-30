import { type Request } from "express";
import { APP_TYPE } from "./userType.enum";
import { Admin, Session, User } from "../entities";

export interface PublicRequest extends Request {
  appType: APP_TYPE;
}

export interface ProtectedRequest extends PublicRequest {
  session: Session;
  user: User & Admin;
}
