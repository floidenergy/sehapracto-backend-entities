import { A as Admin, a as AdminPermission } from './admin.entity-DIL3aSg2.js';
import { Country } from './entities/country.entity.js';
import { Department } from './entities/department.entity.js';
import { Session } from './entities/session.entity.js';
import { User } from './entities/user.entity.js';

declare const index_Admin: typeof Admin;
declare const index_AdminPermission: typeof AdminPermission;
declare const index_Country: typeof Country;
declare const index_Department: typeof Department;
declare const index_Session: typeof Session;
declare const index_User: typeof User;
declare namespace index {
  export { index_Admin as Admin, index_AdminPermission as AdminPermission, index_Country as Country, index_Department as Department, index_Session as Session, index_User as User };
}

export { index as i };
