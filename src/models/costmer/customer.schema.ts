// import { Type } from "@nestjs/common";
import { SchemaFactory ,Schema, Prop} from "@nestjs/mongoose";
import { Types } from "mongoose";
import { GenderEnum } from "src/common/enums/gender.enum";

@Schema({timestamps: true ,discriminatorKey: 'role'})
export class Customer {
    _id: Types.ObjectId;
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;


    @Prop({ type: String })
    address: string;  
    
    @Prop({ types: Number, enum: GenderEnum,default: GenderEnum.male })
    gender: GenderEnum;
  
}
export const CustomerSchema  = SchemaFactory.createForClass(Customer)