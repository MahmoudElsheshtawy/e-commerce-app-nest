import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrandService } from './prand.service';
import { CreatePrandDto } from './dto/create-prand.dto';
import { UpdatePrandDto } from './dto/update-prand.dto';

@Controller('prand')
export class PrandController {
  constructor(private readonly prandService: PrandService) {}

  @Post()
  create(@Body() createPrandDto: CreatePrandDto) {
    return this.prandService.create(createPrandDto);
  }

  @Get()
  findAll() {
    return this.prandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrandDto: UpdatePrandDto) {
    return this.prandService.update(+id, updatePrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prandService.remove(+id);
  }
}
