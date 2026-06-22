import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { PrandModule } from './modules/prand/prand.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { SheradModule } from './modules/sherad/sherad.module';
@Module({
  imports: 
  [
        ConfigModule.forRoot({ isGlobal: true , load: [configuration] }),
        MongooseModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            uri: configService.get('database').url,
            //  onConnectionCreate: (connection: Connection) => {
            //   connection.on('connected', () => {
            //     console.log('MongoDB connected');
            //   });

      // Register event listeners here
      // return connection;
    // },
          }),
        }),
        AuthModule,
        UserModule,
        ProductModule,
        PrandModule,
        SheradModule,
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
