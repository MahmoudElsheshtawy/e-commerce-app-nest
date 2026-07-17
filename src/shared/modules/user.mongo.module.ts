import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminRepository } from "src/models/admin/admin.reposetory";
import { Admin, AdminSchema } from "src/models/admin/adnin.schema";
import { CustomerRepository } from "src/models/costmer/customer.reposetory";
import { Customer, CustomerSchema } from "src/models/costmer/customer.schema";
import { UserRepository } from "src/models/user/user.reposetory";
import { userSchema, User } from "src/models/user/user.schema";

@Module({
    imports: [MongooseModule.forFeature(
        [{
            name: User.name, schema: userSchema, discriminators: [
                { name: Admin.name, schema: AdminSchema },
                { name: Customer.name, schema: CustomerSchema }




            ]
        }]


    )],

    controllers: [],
    providers: [UserRepository,CustomerRepository,AdminRepository],
    exports: [UserRepository,CustomerRepository,AdminRepository],
})
export class UserMongoModule { }

