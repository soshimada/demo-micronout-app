
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserInfoDto } from 'src/app/services/dtos/user-info-dto';
import { UserService } from 'src/app/services/userService';


@Injectable()
export class UserResolve implements Resolve<UserInfoDto> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.userService.get(route.params['id']);
    }
}
