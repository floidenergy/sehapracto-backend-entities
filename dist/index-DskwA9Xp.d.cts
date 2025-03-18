import { Admin } from './entities/admin.entity.cjs';
import { Country } from './entities/country.entity.cjs';
import { Department } from './entities/department.entity.cjs';
import { Session } from './entities/session.entity.cjs';
import { Permission } from './entities/adminPermission.entity.cjs';
import { User } from './entities/user.entity.cjs';
import { ApiKey } from './entities/apikey.entity.cjs';

declare const index_Admin: typeof Admin;
declare const index_ApiKey: typeof ApiKey;
declare const index_Country: typeof Country;
declare const index_Department: typeof Department;
declare const index_Permission: typeof Permission;
declare const index_Session: typeof Session;
declare const index_User: typeof User;
declare namespace index {
  export { index_Admin as Admin, index_ApiKey as ApiKey, index_Country as Country, index_Department as Department, index_Permission as Permission, index_Session as Session, index_User as User };
}

export { index as i };
