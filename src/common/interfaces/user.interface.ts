import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/provider.enums";
import { ProviderEnum } from "../enums/role.enum";

export interface IUser {
  
    email: string;
    password: string;
    userName: string;
    phoneNumber: string;
    // role: RoleEnum;
    // provider: ProviderEnum;
   
}

export interface IAdmin {
   
    email: string;
    password: string;
    userName: string;
    phoneNumber: string;
    isActive: boolean;
   
}
export interface ICustomer {
    email: string;
    password: string;
    userName: string;
    phoneNumber: string;
    // address: string
    gender: GenderEnum;
    address: string;

}