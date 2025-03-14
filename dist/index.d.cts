declare class Country {
    id: number;
    name: string;
    name_ar: string;
    tel_code: string;
    customer_support: string;
    currency: string;
    currency_vs_dollar: string;
    timezone: string;
    flag_icon: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class Department {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class Admin {
    id: number;
    department_id: Department;
    name: string;
    email: string;
    password: string;
    profile_img: string;
    phone: string;
    country_id: Country;
    is_active: boolean;
    can_read_slide: boolean;
    can_add_slide: boolean;
    can_view_country: boolean;
    can_add_countries: boolean;
    can_view_doctor: boolean;
    can_edit_doctor: boolean;
    can_view_hcp: boolean;
    can_edit_hcp: boolean;
    can_view_hospital: boolean;
    can_edit_hospital: boolean;
    can_view_patient: boolean;
    can_view_offer: boolean;
    can_edit_offer: boolean;
    can_view_notification: boolean;
    can_edit_translation: boolean;
    is_translator: boolean;
    can_view_blog: boolean;
    can_edit_blog: boolean;
    can_view_lab_page: boolean;
    can_view_lab_test: boolean;
    can_view_lab_request: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class AdminBlogPostComment {
    id: number;
    adminBlogPostId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class AdminBlogPostFavorite {
    id: number;
    adminBlogPostId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class AdminBlogPostLike {
    id: number;
    adminBlogPostId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class AdminBlogPost {
    id: number;
    countryId: number;
    blogCategoryId: number;
    medicalSpecialtyId: number;
    specialtyId: number;
    author: string;
    slug: string;
    img: string;
    youtubeLink: string;
    title: string;
    content: string;
    metadata: string;
    keywords: string;
    language: string;
    views: number;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class AdSpace {
    id: number;
    countryId: number;
    location: string;
    type: string;
    url: string;
    action: string | null;
    createdAt: Date;
    updatedAt: Date;
}

declare class AnswerDoctor {
    id: number;
    questionDoctorId: number;
    doctorId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class User {
    id: number;
    unique_id: string;
    refferal_code: string;
    refferar_code: string;
    first_name: string;
    last_name: string;
    gender: string;
    birthdate: Date;
    email: string;
    email_verified_at: Date;
    phone: string;
    phone_verified_at: Date;
    balance: number;
    password: string;
    profile_img: string;
    blood_group: string;
    medical_history: string;
    is_diabetic: boolean;
    is_hypertensive: boolean;
    is_smoker: boolean;
    is_alcoholic: boolean;
    id_number: string;
    height: number;
    weight: number;
    country_id: string;
    city_id: string;
    insurance_company_id: number;
    address: string;
    provider: string;
    provider_id: string;
    membership_type: string;
    membership_id: string;
    membership_number: string;
    membership_points: number;
    membership_start_date: Date;
    membership_end_date: Date;
    offers_saved_amount: number;
    is_active: boolean;
    can_start_trial: boolean;
    is_trial: boolean;
    fcm_token: string;
    is_to_delete: boolean;
    delete_date: Date;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class City {
    id: number;
    country: Country;
    name: string;
    name_ar: string;
    created_at: Date;
    updated_at: Date;
}

declare class Doctor {
    id: number;
    unique_id: string;
    title: string;
    first_name: string;
    first_name_ar: string;
    first_name_en: string;
    first_name_tr: string;
    last_name: string;
    last_name_ar: string;
    last_name_en: string;
    last_name_tr: string;
    gender: string;
    birthdate: Date;
    email: string;
    email_verified_at: Date;
    phone: string;
    phone_verified_at: Date;
    examination_fee: string;
    home_examination_fee: string;
    online_examination_fee: string;
    license_no: string;
    waiting_time: string;
    balance: number;
    password: string;
    profile_img: string;
    address: string;
    address_ar: string;
    address_en: string;
    address_tr: string;
    longitude: number;
    latitude: number;
    meta_title: string;
    meta_desc: string;
    bio: string;
    bio_ar: string;
    bio_en: string;
    bio_tr: string;
    pt_instruction: string;
    medicalSpecialty_id: number;
    medical_subspecialty_id: number;
    country: Country;
    city: City;
    provider: string;
    provider_id: string;
    rating: number;
    number_ratings: number;
    is_active: boolean;
    is_available: boolean;
    is_available_online: boolean;
    is_en: boolean;
    is_ar: boolean;
    fcm_token: string;
    is_to_delete: boolean;
    delete_date: Date;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class Appointment {
    id: number;
    user: User;
    doctor: Doctor;
    start: string;
    end: string;
    type: string;
    date: string;
    date_time_stamp: Date;
    is_approved: boolean;
    is_finished: boolean;
    is_rejected: boolean;
    status: number;
    is_rated: boolean;
    rating: number;
    rating_comment: string;
    reason_to_reject: string;
    created_at: Date;
    updated_at: Date;
}

declare class BlogCategory {
    id: number;
    name_ar: string;
    name_en: string;
    name_tr: string;
    created_at: Date;
    updated_at: Date;
}

declare class BlogPost {
    id: number;
    countryId: number;
    blogCategoryId: number;
    author: string;
    slug: string;
    img: string;
    youtubeLink: string;
    title: string;
    content: string;
    metadata: string;
    keywords: string;
    language: string;
    views: number;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class BookedOffer {
    id: number;
    offerId: number;
    userId: number;
    price: number;
    currency: string;
    paymentType: string;
    isPaid: boolean;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class MedicineCategory {
    id: number;
    nameAr: string;
    nameEn: string;
    nameTr: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class MedicineSubcategory {
    id: number;
    medicineCategory: MedicineCategory;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class Medicine {
    id: number;
    country: Country;
    medicineSubcategory: MedicineSubcategory;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    scientificName: string;
    routeAdmin: string;
    img: string;
    descriptionEn: string;
    descriptionAr: string;
    descriptionTr: string;
    price: number;
    isOtc: boolean;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class CartMedicine {
    id: number;
    user: User;
    medicine: Medicine;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class Company {
    id: number;
    countryId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class CompanyEmployee {
    id: number;
    userId: number;
    companyId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class HCP {
    id: number;
    unique_id: string;
    title: string;
    first_name: string;
    first_name_ar: string;
    first_name_en: string;
    first_name_tr: string;
    last_name: string;
    last_name_ar: string;
    last_name_en: string;
    last_name_tr: string;
    gender: string;
    birthdate: Date;
    email: string;
    email_verified_at: Date;
    phone: string;
    phone_verified_at: Date;
    examination_fee: string;
    home_examination_fee: string;
    online_examination_fee: string;
    license_no: string;
    waiting_time: string;
    balance: number;
    password: string;
    profile_img: string;
    address: string;
    address_ar: string;
    address_en: string;
    address_tr: string;
    bio: string;
    bio_ar: string;
    bio_en: string;
    bio_tr: string;
    specialty_id: number;
    country: Country;
    city: City;
    provider: string;
    provider_id: string;
    rating: number;
    number_ratings: number;
    is_active: boolean;
    is_available: boolean;
    is_en: boolean;
    is_ar: boolean;
    is_to_delete: boolean;
    delete_date: Date;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class Degree {
    id: number;
    h_c_p: HCP;
    title: string;
    img: string;
    degree_date: string;
    created_at: Date;
    updated_at: Date;
}

declare class DiscountType {
    id: number;
    name: string;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    color: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorBlogPostComment {
    id: number;
    doctorBlogPostId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorBlogPostFavorite {
    id: number;
    doctorBlogPostId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorBlogPostLike {
    id: number;
    doctorBlogPostId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorBlogPost {
    id: number;
    countryId: number;
    blogCategoryId: number;
    medicalSpecialtyId: number;
    doctorId: number;
    author: string;
    slug: string;
    img: string;
    youtubeLink: string;
    title: string;
    content: string;
    metadata: string;
    keywords: string;
    language: string;
    views: number;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class MedicalSpecialty {
    id: number;
    name: string;
    name_ar: string;
    name_tr: string;
    img: string;
    description: string;
    meta_desc_en: string;
    meta_desc_ar: string;
    created_at: Date;
    updated_at: Date;
}

declare class DoctorDepartmentService {
    id: number;
    medicalSpecialty: MedicalSpecialty;
    name: string;
    nameAr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class Language {
    id: number;
    name: string;
    abbrv: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorLanguage {
    id: number;
    language: Language;
    doctor: Doctor;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorNotification {
    id: number;
    doctor: Doctor;
    title: string;
    titleAr: string;
    context: string;
    contextAr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorOnlineAppointment {
    id: number;
    doctor_id: number;
    user_id: number;
    start: string;
    date: string;
    date_time_stamp: Date;
    is_rated: boolean;
    rating: number;
    status: number;
    isDoctorJoin: boolean;
    isUserJoin: boolean;
    duration: number;
    rating_comment: string;
    created_at: Date;
    updated_at: Date;
}

declare class DoctorPatientMessage {
    id: number;
    doctorPatientConversation: DoctorPatientConversation;
    sender: string;
    message: string;
    msgType: string;
    fileLink: string;
    isSeen: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorPatientConversation {
    id: number;
    doctor: Doctor;
    user: User;
    messages: DoctorPatientMessage[];
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    doctorId: number;
    doctor: Doctor;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorService {
    id: number;
    doctor: Doctor;
    doctorDepartmentService: DoctorDepartmentService;
    fee: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorTransactionRecord {
    id: number;
    doctor: Doctor;
    admin: Admin;
    type: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class Hospital {
    id: number;
    country_id: number;
    city_id: number;
    province_id: number;
    special_code: string;
    name: string;
    name_ar: string;
    name_en: string;
    name_tr: string;
    logo: string;
    adress: string;
    adress_ar: string;
    adress_en: string;
    adress_tr: string;
    phone: string;
    phone2: string;
    phone_verified_at: Date;
    email: string;
    facebook_link: string;
    instagram_link: string;
    twitter_link: string;
    linkedin_link: string;
    youtube_link: string;
    bio: string;
    bio_ar: string;
    bio_en: string;
    bio_tr: string;
    balance: number;
    rating: number;
    number_ratings: number;
    start_time: number;
    end_time: number;
    work_days: number;
    longitude: string;
    latitude: string;
    sp_percentage: number;
    is_active: boolean;
    is_available: boolean;
    is_pin: boolean;
    is_show_price: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class DoctorWorkLocation {
    id: number;
    doctor: Doctor;
    hospital: Hospital;
    name: string;
    nameAr: string;
    nameEn: string;
    nameTr: string;
    phone: string;
    address: string;
    addressAr: string;
    addressEn: string;
    addressTr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class EmailVerification {
    id: number;
    userId: number;
    user: User;
    userType: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class FailedJob {
    id: number;
    uuid: string;
    connection: string;
    queue: string;
    payload: string;
    exception: string;
    failed_at: Date;
}

declare class FavoriteDoctor {
    id: number;
    user: User;
    doctor: Doctor;
    created_at: Date;
    updated_at: Date;
}

declare class FavoriteHcp {
    id: number;
    user_id: number;
    h_c_p_id: number;
    created_at: Date;
    updated_at: Date;
}

declare class HcpAppointment {
    id: number;
    user: User;
    h_c_p: HCP;
    start: string;
    end: string;
    type: string;
    date: string;
    date_time_stamp: Date;
    is_approved: boolean;
    is_finished: boolean;
    is_rejected: boolean;
    status: number;
    is_rated: boolean;
    rating: number;
    rating_comment: string;
    reason_to_reject: string;
    created_at: Date;
    updated_at: Date;
}

declare class HcpBlogPost {
    id: number;
    countryId: number;
    blogCategoryId: number;
    specialtyId: number;
    hcpId: number;
    author: string;
    slug: string;
    img: string;
    youtubeLink: string;
    title: string;
    content: string;
    metadata: string;
    keywords: string;
    language: string;
    views: number;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpBlogPostComment {
    id: number;
    hcpBlogPostId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpBlogPostFavorite {
    id: number;
    hcpBlogPostId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpBlogPostLike {
    id: number;
    hcpBlogPostId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class HCPLanguage {
    id: number;
    language: Language;
    hcp: HCP;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpNotification {
    id: number;
    healthcareProvider: HCP;
    title: string;
    titleAr: string;
    context: string;
    contextAr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class DoctorOtpPin {
    id: number;
    doctor: Doctor;
    pin: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    hcpId: number;
    hcp: HCP;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpTransactionRecord {
    id: number;
    healthcareProvider: HCP;
    admin: Admin;
    type: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HcpWorkingHour {
    id: number;
    h_c_p: HCP;
    start: string;
    end: string;
    day_time: string;
    created_at: Date;
    updated_at: Date;
}

declare class HcpWorkLocation {
    id: number;
    hcpId: number;
    hospitalId: number;
    name: string;
    nameAr: string;
    nameEn: string;
    nameTr: string;
    phone: string;
    address: string;
    addressAr: string;
    addressEn: string;
    addressTr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalAdmin {
    id: number;
    hospital: Hospital;
    countryId: string;
    firstName: string;
    lastName: string;
    email: string;
    emailVerifiedAt: Date | null;
    phone: string;
    phoneVerifiedAt: Date | null;
    password: string;
    profileImg: string;
    isActive: boolean;
    isOwner: boolean;
    rememberToken: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalAppointment {
    id: number;
    user_id: number;
    hospital_id: number;
    hospital_department_id: number;
    hospital_doctor_id: number;
    time: string;
    date: string;
    status: number;
    is_rated: boolean;
    rating: number;
    rating_comment: string;
    price: number;
    booked_by: string;
    date_time_stamp: Date;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalBranchDoctor {
    id: number;
    hospital_branch_id: number;
    hospital_doctor_id: number;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalBranch {
    id: number;
    hospital_id: number;
    city_id: number;
    province_id: number;
    name: string;
    street_name: string;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalDepartment {
    id: number;
    hospital_id: number;
    medical_specialty_id: number;
    is_hidden: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalDoctor {
    id: number;
    doctor: Doctor;
    hospital: Hospital;
    hospitalDepartment: HospitalDepartment;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalDoctorWorkHour {
    id: number;
    hospitalDoctorId: number;
    hospitalId: number;
    day: string;
    startTime: string;
    dayTime: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalHcp {
    id: number;
    hcp_id: number;
    hospital_id: number;
    hospital_hcp_department_id: number;
    is_available: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalHcpAppointment {
    id: number;
    userId: number;
    hospitalId: number;
    hospitalHcpDepartmentId: number;
    hospitalHcpId: number;
    time: string;
    date: string;
    status: number;
    isRated: boolean;
    rating: number;
    ratingComment: string;
    price: number;
    bookedBy: string;
    dateTimeStamp: Date;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalHcpDepartment {
    id: number;
    hospital_id: number;
    specialty_id: number;
    is_hidden: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalHcpWorkHour {
    id: number;
    hospitalHcpId: number;
    hospitalId: number;
    day: string;
    startTime: string;
    dayTime: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalImg {
    id: number;
    hospital: Hospital;
    img: string;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalInsurance {
    id: number;
    insuranceCompanyId: number;
    hospitalId: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalLocation {
    id: number;
    hospital: Hospital;
    address: string;
    created_at: Date;
    updated_at: Date;
}

declare class HospitalOtpPin {
    id: number;
    hospitalId: number;
    pin: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class HospitalRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    hospitalId: number;
    hospital: Hospital;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class InsuranceCompany {
    id: number;
    country: Country;
    name: string;
    name_ar: string;
    name_tr: string;
    logo: string;
    about_en: string;
    about_ar: string;
    about_tr: string;
    video_url: string;
    created_at: Date;
    updated_at: Date;
}

declare class Job {
    id: number;
    queue: string;
    payload: string;
    attempts: number;
    reserved_at: number | null;
    available_at: number;
    created_at: number;
}

declare class LaboratoryPage {
    id: number;
    countryId: number;
    nameEn: string;
    nameAr: string | null;
    nameTr: string | null;
    descriptionEn: string;
    descriptionAr: string | null;
    descriptionTr: string | null;
    contact: string;
    img: string;
    link: string;
    fbLink?: string;
    igLink?: string;
    twitterLink?: string;
    whatsappLink?: string;
    videoLink?: string;
    isCreditCard: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class LabPageSlideImg {
    id: number;
    laboratoryPageId: number;
    imgPath: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class LabRequest {
    id: number;
    countryId: number;
    userId: number;
    paymentType: string;
    price: number;
    currency: string;
    isPaid: boolean;
    status: number;
    dateTimeStamp: Date;
    createdAt: Date;
    updatedAt: Date;
}

declare class LabTest {
    id: number;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    descriptionEn: string;
    descriptionAr: string;
    descriptionTr: string;
    priceTurkey: number;
    priceQatar: number;
    orderInList: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class LabRequestTest {
    id: number;
    labRequestId: number;
    labTestId: number;
    price: number;
    labRequest: LabRequest;
    labTest: LabTest;
    createdAt: Date;
    updatedAt: Date;
}

declare class MedFaq {
    id: number;
    medicalSpecialtyId: number;
    questionEn: string;
    questionAr: string;
    answerEn: string;
    answerAr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class MedicalDegree {
    id: number;
    doctor: Doctor;
    title: string;
    img: string;
    degree_date: string;
    created_at: Date;
    updated_at: Date;
}

declare class MedicalSubspecialty {
    id: number;
    medicalSpecialty: MedicalSpecialty;
    name: string;
    name_ar: string;
    name_tr: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class MedicinePurchaseOrder {
    id: number;
    userId: number;
    pharmStoreId: number;
    total: number;
    status: number;
    currency: string;
    address: string;
    prescription: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class Membership {
    id: number;
    countryId: number;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    price: number;
    priceDiscount: number;
    servicesEn: string;
    servicesAr: string;
    servicesTr: string;
    termsEn: string;
    termsAr: string;
    termsTr: string;
    duration: number;
    isShow: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class Offer {
    id: number;
    countryId: number;
    medicalSpecialtyId: number;
    hospitalId: number;
    offerCategoryId: number;
    title: string;
    name: string;
    address: string;
    img: string;
    details: string;
    ptInstruction: string;
    price: number;
    priceBefore: number;
    discount: number;
    views: number;
    clicks: number;
    ratingTotal: number;
    ratingNumber: number;
    facebookLink: string;
    instagramLink: string;
    youtubeLink: string;
    website: string;
    phone: string;
    email: string;
    endDate: Date;
    isOpen: boolean;
    isAppear: boolean;
    isShowPrice: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferAccessibility {
    id: number;
    name: string;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    icon: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferCategory {
    id: number;
    name: string;
    nameAr: string;
    nameEn: string;
    nameTr: string;
    img: string;
    isAppear: boolean;
    isLargeImg: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class Offering {
    id: number;
    countryId: number;
    cityId: number;
    hospitalId: number;
    serviceProviderId: number;
    title: string;
    titleEn: string;
    titleAr: string;
    titleTr: string;
    details: string;
    detailsEn: string;
    detailsAr: string;
    detailsTr: string;
    instructions: string;
    instructionsEn: string;
    instructionsAr: string;
    instructionsTr: string;
    coverImg: string;
    whatsapp: string;
    email: string;
    website: string;
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    youtubeLink: string;
    isPremium: boolean;
    isApproved: boolean;
    longitude: number;
    latitude: number;
    startDate: Date;
    endDate: Date;
    rating: number;
    ratingNumber: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferingCoupon {
    id: number;
    offeringId: number;
    offering: Offer;
    membershipId: number;
    membership: Membership;
    discountTypeId: number;
    discountType: DiscountType;
    title: string;
    howToUse: string;
    price: number;
    numberUses: number;
    useFrequency: number;
    savedAmount: number;
    discountPercentage: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferingRating {
    id: number;
    rating: number;
    userId: number;
    user: User;
    offeringId: number;
    offering: Offer;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferingSelectedCategory {
    id: number;
    offeringId: number;
    offering: Offer;
    offerCategoryId: number;
    offerCategory: OfferCategory;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferingSlideImg {
    id: number;
    offeringId: number;
    offering: Offer;
    imgPath: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class OfferSubCategory {
    id: number;
    offerCategory: OfferCategory;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class PasswordReset {
    email: string;
    token: string;
    created_at: Date;
}

declare class PatientHcpConversation {
    id: number;
    hcp: HCP;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}

declare class PatientHcpMessage {
    id: number;
    patientHcpConversation: PatientHcpConversation;
    sender: string;
    message: string;
    msgType: string;
    fileLink: string;
    isSeen: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class PersonalAccessToken {
    id: number;
    tokenable_type: string;
    tokenable_id: number;
    name: string;
    token: string;
    abilities: string;
    last_used_at: Date;
    created_at: Date;
    updated_at: Date;
}

declare class Pharmacy {
    id: number;
    country: Country;
    city: City;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class PharmStore {
    id: number;
    countryId: number;
    pharmacyId: number;
    name: string;
    email: string;
    emailVerifiedAt: Date | null;
    phone: string;
    phoneVerifiedAt: Date | null;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class PopupAd {
    id: number;
    countryId: number;
    img: string;
    action: string;
    actionId: string;
    actionUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class Practice {
    id: number;
    country: Country;
    doctor: Doctor;
    name: string;
    img: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
}

declare class PracticeDoctor {
    id: number;
    practice: Practice;
    doctor: Doctor;
    created_at: Date;
    updated_at: Date;
}

declare class PracticeInsurance {
    id: number;
    insuranceCompany: InsuranceCompany;
    practice: Practice;
    created_at: Date;
    updated_at: Date;
}

declare class PracticeLocation {
    id: number;
    practice: Practice;
    location: string;
    created_at: Date;
    updated_at: Date;
}

declare class Province {
    id: number;
    city: City;
    name: string;
    nameAr: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class PurchasedMedicine {
    id: number;
    medicinePurchaseOrderId: number;
    medicineId: number;
    nameEn: string;
    nameAr: string;
    nameTr: string;
    img: string;
    count: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class QuestionDoctor {
    id: number;
    userId: number;
    doctorId: number;
    medicalSpecialtyId: number;
    content: string;
    isAppear: boolean;
    status: number;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class Reminder {
    id: number;
    userNumber: string;
    userFcmToken: string;
    originalTime: Date;
    reminderTime: Date;
    createdAt: Date;
    updatedAt: Date;
}

declare class RewardPoints {
    id: number;
    bookAppointment: number;
    bookOnlineAppointment: number;
    offerReview: number;
    bookOffer: number;
    updateProfile: number;
    bookLabTest: number;
    blogComment: number;
    createdAt: Date;
    updatedAt: Date;
}

declare class ServiceProvider {
    id: number;
    countryId: number;
    cityId: number;
    uniqueId: string;
    specialCode: string;
    name: string;
    nameAr: string;
    nameEn: string;
    nameTr: string;
    email: string;
    emailVerifiedAt: Date;
    phone: string;
    phoneVerifiedAt: Date;
    balance: number;
    password: string;
    profileImg: string;
    address: string;
    addressAr: string;
    addressEn: string;
    addressTr: string;
    longitude: number;
    latitude: number;
    bio: string;
    bioAr: string;
    bioEn: string;
    bioTr: string;
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    linkedinLink: string;
    youtubeLink: string;
    rating: number;
    numberRatings: number;
    isActive: boolean;
    fcmToken: string;
    isToDelete: boolean;
    deleteDate: Date;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class ServiceProviderAccessability {
    id: number;
    offerAccessability: OfferAccessibility;
    serviceProvider: ServiceProvider;
    createdAt: Date;
    updatedAt: Date;
}

declare class Session {
    id: string;
    user_id: User;
    ip_address: string | null;
    user_agent: string | null;
    payload: string;
    last_activity: number;
}

declare class Slide {
    id: number;
    country: Country;
    name: string;
    name_ar: string;
    name_en: string;
    name_tr: string;
    description: string;
    description_ar: string;
    description_en: string;
    description_tr: string;
    contact: string;
    img: string;
    link: string;
    fb_link: string;
    ig_link: string;
    twitter_link: string;
    whatsapp_link: string;
    video_link: string;
    client_name: string;
    client_adress: string;
    duration: string;
    clicks: number;
    views: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

declare class SlideImage {
    id: number;
    slide_id: number;
    img_path: string;
    created_at: Date;
    updated_at: Date;
}

declare class SlideService {
    id: number;
    slide_id: number;
    name: string;
    img_path: string;
    price: number;
    created_at: Date;
    updated_at: Date;
}

declare class Specialty {
    id: number;
    name: string;
    name_ar: string;
    img: string;
    description: string;
    meta_desc_en: string;
    meta_desc_ar: string;
    created_at: Date;
    updated_at: Date;
}

declare class Transaction {
    id: number;
    type: string;
    typeId: string;
    userType: string;
    userId: string;
    orderId: string;
    transactionType: string;
    value: number;
    currency: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class UserCoupon {
    id: number;
    userId: number;
    user: User;
    offeringCouponId: number;
    offeringCoupon: OfferingCoupon;
    offeringId: number;
    offering: Offer;
    serviceProviderId: number;
    serviceProvider: ServiceProvider;
    maxAllowedUses: number;
    numberUsed: number;
    status: number;
    frequency: number;
    uniqueCode: string;
    lastUsed: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

declare class UserNotification {
    id: number;
    user: User;
    title: string;
    titleAr: string;
    context: string;
    contextAr: string;
    action: string;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
}

declare class UserOtpPin {
    id: number;
    user_id: number;
    pin: string;
    created_at: Date;
    updated_at: Date;
}

declare class UserPoints {
    id: number;
    userId: number;
    points: number;
    reason: string;
    isAdd: boolean;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

declare class UserTransactionRecord {
    id: number;
    user: User;
    admin: Admin;
    type: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
}

declare class WorkingHour {
    id: number;
    doctor: Doctor;
    start: string;
    end: string;
    day_time: string;
    created_at: Date;
    updated_at: Date;
}

export { AdSpace, Admin, AdminBlogPost, AdminBlogPostComment, AdminBlogPostFavorite, AdminBlogPostLike, AnswerDoctor, Appointment, BlogCategory, BlogPost, BookedOffer, CartMedicine, City, Company, CompanyEmployee, Country, Degree, Department, DiscountType, Doctor, DoctorBlogPost, DoctorBlogPostComment, DoctorBlogPostFavorite, DoctorBlogPostLike, DoctorDepartmentService, DoctorLanguage, DoctorNotification, DoctorOnlineAppointment, DoctorOtpPin, DoctorPatientConversation, DoctorPatientMessage, DoctorRating, DoctorService, DoctorTransactionRecord, DoctorWorkLocation, EmailVerification, FailedJob, FavoriteDoctor, FavoriteHcp, HCP, HCPLanguage, HcpAppointment, HcpBlogPost, HcpBlogPostComment, HcpBlogPostFavorite, HcpBlogPostLike, HcpNotification, HcpRating, HcpTransactionRecord, HcpWorkLocation, HcpWorkingHour, Hospital, HospitalAdmin, HospitalAppointment, HospitalBranch, HospitalBranchDoctor, HospitalDepartment, HospitalDoctor, HospitalDoctorWorkHour, HospitalHcp, HospitalHcpAppointment, HospitalHcpDepartment, HospitalHcpWorkHour, HospitalImg, HospitalInsurance, HospitalLocation, HospitalOtpPin, HospitalRating, InsuranceCompany, Job, LabPageSlideImg, LabRequest, LabRequestTest, LabTest, LaboratoryPage, Language, MedFaq, MedicalDegree, MedicalSpecialty, MedicalSubspecialty, Medicine, MedicineCategory, MedicinePurchaseOrder, MedicineSubcategory, Membership, Offer, OfferAccessibility, OfferCategory, OfferSubCategory, Offering, OfferingCoupon, OfferingRating, OfferingSelectedCategory, OfferingSlideImg, PasswordReset, PatientHcpConversation, PatientHcpMessage, PersonalAccessToken, PharmStore, Pharmacy, PopupAd, Practice, PracticeDoctor, PracticeInsurance, PracticeLocation, Province, PurchasedMedicine, QuestionDoctor, Reminder, RewardPoints, ServiceProvider, ServiceProviderAccessability, Session, Slide, SlideImage, SlideService, Specialty, Transaction, User, UserCoupon, UserNotification, UserOtpPin, UserPoints, UserTransactionRecord, WorkingHour };
