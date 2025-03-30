import { Request } from "express";
import { APP_TYPE } from "./userType.enum.js";
import { Admin } from "../entities/admin.entity.js";
import { Session } from "../entities/session.entity.js";
import { User } from "../entities/user.entity.js";
import "../entities/department.entity.js";
import "../entities/baseEntity.entity.js";
import "../entities/adminPermission.entity.js";
import "../entities/country.entity.js";

interface PublicRequest extends Request {
  appType: APP_TYPE;
}
interface ProtectedRequest<T extends Admin> extends PublicRequest {
  session: Session;
  user: Omit<User, "hashPassword" | "validatePassword"> & T;
}

export type { ProtectedRequest, PublicRequest };
