import { IAdmin } from "src/common/interfaces/user.interface";
import { AbstractRepository } from "../abstract.reposetory";
import { Model } from "mongoose";
import { Admin } from "./adnin.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AdminRepository extends AbstractRepository<IAdmin> {

    constructor(@InjectModel(Admin.name) adminModel : Model<IAdmin>) {
        super(adminModel);
    }   

}