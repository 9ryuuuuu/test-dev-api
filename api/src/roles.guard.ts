import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles); // admin
    if (!roles) return true;

    // const request = context.switchToHttp().getRequest();
    // console.log(request);
    // const user = request.user;
    // console.log(user);
    // return user === roles;

    console.log('End of RolesGuard');
    return true;
  }
}
