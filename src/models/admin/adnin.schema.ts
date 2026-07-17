
import { SchemaFactory,Schema, Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({timestamps: true, discriminatorKey: 'role'})

export class Admin {
    
   _id:Types.ObjectId;
   userName: string;
   password: string;
   email: string;   
   phoneNumber: string;
   
   @Prop({ type: Boolean })
   isActive: boolean;


}
export const AdminSchema = SchemaFactory.createForClass(Admin);
 