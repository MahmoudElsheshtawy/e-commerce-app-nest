import { Controller, Post, Body, Get, UseGuards,   } from '@nestjs/common';
import  AuthService  from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/common/decorators/user.decorator';
import { AuthGuard } from 'src/common/guards/authentication.guards';
import { isPublic } from 'src/common/decorators/public.decorator';


@Controller('auth')

// @isPublic()
export class AuthController {
  constructor(private readonly authService: AuthService) {}


// handler for register route
// /auth/register

  @Post('register')
@isPublic()

  async register(@Body() registerDto: RegisterDto) {
    const createdCustomer = await this.authService.register(registerDto);
    return {
      message: 'User registered successfully',
      success: true,
      data: {createdCustomer},
      
    };
  }
  // handler for  login
  @Post('login')
@isPublic()
 async login(@Body() loginDto:LoginDto){
   const objectResult = await this.authService.login(loginDto);
    return {
      message: 'User login  successfully',
      success: true,
      data: objectResult,
      
    };
  }

  
 // get profile
 @Get('profile/me')
 @UseGuards(AuthGuard)
  async getProfile(@User() user:any){
     const customer =  await this.authService.getProfile(user.sub);
       return {
      message: 'User retrieved successfully',
      success: true,
      data:customer,
      
    };
   }




















  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }

}
