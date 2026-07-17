import { Module } from '@nestjs/common';
import  AuthService  from './auth.service';
import { AuthController } from './auth.controller';
// import { CustomerRepository } from 'src/models/costmer/customer.reposetory';
// import { Customer, CustomerSchema } from 'src/models/costmer/customer.schema';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, userSchema }/ from 'src/models/user/user.schema';
import { Customer, CustomerSchema } from 'src/models/costmer/customer.schema';
import { UserMongoModule } from 'src/shared/modules/user.mongo.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [UserMongoModule,
    JwtModule.registerAsync({
      inject:[ConfigService],
   useFactory: async (configService:ConfigService) => ({
    secret: configService.get('jwt').accessSecret,
   options: { expiresIn: '1d' },
  }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
