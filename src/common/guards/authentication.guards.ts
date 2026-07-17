import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService:JwtService,private readonly reflector:Reflector){}

  canActivate( context: ExecutionContext):boolean{

   const isPublic =this.reflector.getAllAndOverride('isPublic',[context.getHandler(),context.getClass()]);
   if(isPublic){
    return true;
   }
    const request = context.switchToHttp().getRequest();

    const authorization =request.headers.authorization;

    if (!authorization) {
        throw new UnauthorizedException('token is missing!')
    }

    const token = authorization.split(' ')[1]

      request.user =  this.jwtService.verify(token) //paylode or error
    return true //next()
  }
}