import { Admin } from './entities/admin.entity.cjs';
import { Country } from './entities/country.entity.cjs';
import { Department } from './entities/department.entity.cjs';
import { Session } from './entities/session.entity.cjs';
import { Permission } from './entities/adminPermission.entity.cjs';
import { User } from './entities/user.entity.cjs';
import { ApiKey } from './entities/apikey.entity.cjs';
import { Attachement } from './entities/attachements.entity.cjs';
import { C as Category, P as Product } from './category.entity-DugzkOj6.cjs';
import { O as Order, a as OrderItem } from './order.entity-DBg6HcyU.cjs';
import { Patient } from './entities/patient.entity.cjs';
import { Pharmacy } from './entities/pharmacy.entity.cjs';
import { PharmacyBusiness } from './entities/pharmacyBusiness.entity.cjs';
import { PharmacyItem } from './entities/pharmacyItem.entity.cjs';
import { PharmacyStore } from './entities/pharmacyStore.entity.cjs';
import { Prescription } from './entities/prescriptions.entity.cjs';
import { Sale } from './entities/sale.entity.cjs';
import { SaleItem } from './entities/saleItems.entity.cjs';

declare const index_Admin: typeof Admin;
declare const index_ApiKey: typeof ApiKey;
declare const index_Attachement: typeof Attachement;
declare const index_Category: typeof Category;
declare const index_Country: typeof Country;
declare const index_Department: typeof Department;
declare const index_Order: typeof Order;
declare const index_OrderItem: typeof OrderItem;
declare const index_Patient: typeof Patient;
declare const index_Permission: typeof Permission;
declare const index_Pharmacy: typeof Pharmacy;
declare const index_PharmacyBusiness: typeof PharmacyBusiness;
declare const index_PharmacyItem: typeof PharmacyItem;
declare const index_PharmacyStore: typeof PharmacyStore;
declare const index_Prescription: typeof Prescription;
declare const index_Product: typeof Product;
declare const index_Sale: typeof Sale;
declare const index_SaleItem: typeof SaleItem;
declare const index_Session: typeof Session;
declare const index_User: typeof User;
declare namespace index {
  export { index_Admin as Admin, index_ApiKey as ApiKey, index_Attachement as Attachement, index_Category as Category, index_Country as Country, index_Department as Department, index_Order as Order, index_OrderItem as OrderItem, index_Patient as Patient, index_Permission as Permission, index_Pharmacy as Pharmacy, index_PharmacyBusiness as PharmacyBusiness, index_PharmacyItem as PharmacyItem, index_PharmacyStore as PharmacyStore, index_Prescription as Prescription, index_Product as Product, index_Sale as Sale, index_SaleItem as SaleItem, index_Session as Session, index_User as User };
}

export { index as i };
