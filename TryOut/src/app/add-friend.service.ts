import {Injectable, InjectionToken, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
// tslint:disable-next-line:variable-name
  private _url = 'http://localhost:6969/addFriend';

  constructor(
    private http: HttpClient,
  ) {
  }

  addFriend(friend: Friend): Observable<ArrayBuffer> {
// @ts-ignore @inject decorator
    return this.http.post(this._url, friend);
  }

}

