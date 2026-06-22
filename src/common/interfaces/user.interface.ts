import { RoleEnum } from "../enums/provider.enums";
import { ProviderEnum } from "../enums/role.enum";

export interface IUser {
    id: string;
    email: string;
    password: string;
    name: string;
    role: RoleEnum;
    provider: ProviderEnum;
   
}