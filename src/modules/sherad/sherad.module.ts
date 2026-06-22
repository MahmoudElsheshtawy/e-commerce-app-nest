import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from 'src/models/user/user.reposetory';
import { User, userSchema } from 'src/models/user/user.schema';

@Module({
    // register the usermodel in the sherad module to be used in the services
    imports: [MongooseModule.forFeature([
        { name: User.name, schema: userSchema },
        // { name: 'Product', schema: userSchema },
        // { name: 'Order', schema: userSchema },
        // { name: 'Brand', schema: userSchema },
        // { name: 'Category', schema: userSchema },

    
    
    ])],

    providers: [UserRepository],
    controllers: [],
})
export class SheradModule {}
