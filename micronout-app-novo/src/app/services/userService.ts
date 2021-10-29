import { UserInfoDto } from './dtos/user-info-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { UserDto } from './dtos/user-dto';

@Injectable()
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<UserInfoDto[]> {
    return this.http.get<UserInfoDto[]>(
      this.ApiUrl + 'user');
  }

  get(userId: string): Observable<UserInfoDto> {
    return this.http.get<UserInfoDto>(
      this.ApiUrl + 'user/' + userId,
    );
  }

  post(user: UserDto): Observable<any> {
    return this.http
      .post(this.ApiUrl + 'user', user, super.getHeaderJson())
      .pipe(map(super.extractData), catchError(super.serviceError));
  }

  put(user: UserInfoDto): Observable<any> {
    return this.http
      .put(this.ApiUrl + 'user/' + user.id, user, super.getHeaderJson())
      .pipe(map(super.extractData), catchError(super.serviceError));
  }

  delete(userId: string): Observable<any> {
    return this.http
      .delete(this.ApiUrl + 'user/' + userId, super.getHeaderJson())
      .pipe(map(super.extractData), catchError(super.serviceError));
  }
}
