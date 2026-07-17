import { SchemaFactory,Schema, Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
// import { Schema } from "mongoose";

// import { RoleEnum } from "src/common/enums/provider.enums";
// import { ProviderEnum } from "src/common/enums/role.enum";



@Schema({timestamps: true , discriminatorKey: 'role'})
export class User {
    _id: Types.ObjectId;


    @Prop({ required: true ,type: String, minlength: 3, maxlength: 20, })
    userName: string;

    @Prop({
        type: String,
        // required:function( this: User) {
        //  return this.provider === ProviderEnum.SYSTEM;
        //  }
         
         })
    password: string;



    @Prop({ required: true , unique: true, type: String, minlength: 3, maxlength: 50, })
    email: string;


    @Prop({ type: String })
    phoneNumber: string;


    // @Prop({ type:String, enum: RoleEnum, default: RoleEnum.USER })
    // role: RoleEnum;

    // @Prop({ type:String, enum: ProviderEnum, default: ProviderEnum.SYSTEM })
    // provider: ProviderEnum;

}
export const userSchema = SchemaFactory.createForClass(User);