export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
 }
 
 export interface authenticationData {
    id:string,
    role: USER_ROLES
 }

 export interface user {
    id: string
    email: string
    name: string
    password: string
    role: USER_ROLES
 }
 export interface recipe{
  
   id:string
   title:string
   description:string
   image:string
   creation_date:string
   creator_id:string
 }
 export interface follow {
   follower: string
   following: string
} 