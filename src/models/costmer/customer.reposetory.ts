import { Injectable } from "@nestjs/common";
import { AbstractRepository } from "../abstract.reposetory";
import { Customer } from "./customer.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
// import { ICustomer } from "src/common/interfaces/user.interface";
import { ICustomer } from "src/common/interfaces/user.interface";







@Injectable()
export class CustomerRepository extends AbstractRepository<ICustomer> {
// getOne(arg0: { email: string; }) {
//   throw new Error('Method not implemented.');
// }


constructor(@InjectModel(Customer.name) customerModel : Model<ICustomer>) {
    super(customerModel);
}








}