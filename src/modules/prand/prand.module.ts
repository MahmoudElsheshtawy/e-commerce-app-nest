import { Module } from '@nestjs/common';
import { PrandService } from './prand.service';
import { PrandController } from './prand.controller';

@Module({
  controllers: [PrandController],
  providers: [PrandService],
})
export class PrandModule {}
