import { Admin } from './entities/admin.entity.js';
import { Country } from './entities/country.entity.js';
import { Department } from './entities/department.entity.js';
import { Session } from './entities/session.entity.js';
import { Permission } from './entities/adminPermission.entity.js';
import { User } from './entities/user.entity.js';
import { ApiKey } from './entities/apikey.entity.js';

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
