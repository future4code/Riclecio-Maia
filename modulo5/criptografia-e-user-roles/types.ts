export interface AuthenticationData {
    id:string
    role: USER_ROLES
 };

 export type user={
     id:string
     email:string
     password:string
     role: USER_ROLES
 }
 export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
 }