import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { CustomerRepository } from 'src/models/costmer/customer.reposetory';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Types } from 'mongoose';
// import { register } from 'module';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
class AuthService {

  constructor(private readonly customerRepository: CustomerRepository, private readonly jwtService: JwtService) { }



  async register(registerDto: RegisterDto) {

    //--1--check if the user already exists
    // i need repository to check if the user already exists in the database >> ingect the user repository in the constructor and use it to check if the user already exists
    const customerExists = await this.customerRepository.getOne({
      email: registerDto.email
    })

    //--2-- if the user already exists, throw an error
    if (customerExists) {
      throw new ConflictException('User already exists');
    }
    //--3--hash the password
    //--4-- send email to the user to verify their email address add otp
    //--5-- save otp and the user to the Cache
    //--6-- when account is verified, save the user to the database
    //--7-- remove the user from the cache

    const createdCustomer = await this.customerRepository.create(registerDto);

    return createdCustomer;

  }
  async login(loginDto: LoginDto) {
    //--1--check if the user exists
    //if is no t, throw an error
    const customer = await this.customerRepository.getOne({
      email: loginDto.email
    })
    if (!customer) {
      throw new NotFoundException('User does not exist');
    }
    // check password
    // if password is incorrect, throw an error
    //  generate jwt token  >> sign and return it to the user

  const accessToken=  this.jwtService.sign(
      { sub: customer._id, role: customer['role'] },// when running
      { secret: process.env.JWT_SECRET, expiresIn: '1d' }
    );
  const refreshToken =this.jwtService.sign(
  

      {sub :customer._id,role:customer['role']},
      
      { expiresIn: '7d' }
  
    
  )
return {accessToken,refreshToken};


  }

  async getProfile(userId :Types.ObjectId){

    return await this.customerRepository.getOne({_id:userId});
    
  }


}
export default AuthService;






















