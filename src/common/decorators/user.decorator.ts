// body  >> fun add property to  param

// function fun( x: object) {}

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
export const User = createParamDecorator(
    (data:string,ctx:ExecutionContext)=>{
        const request = ctx.switchToHttp().getRequest();
        return data? request.user[data]:request.user;
    }
)

// )