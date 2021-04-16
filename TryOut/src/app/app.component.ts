import {Component} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  languageArray: Array<string> = ['C#', 'C++', 'Dart', 'Go', 'Java', 'Javascript', 'Php', 'Python', 'Ruby', 'Rust', 'SQL', 'Typescript', 'VB.NET'];
  friend = new Friend();
  submitted = false;
  private url = 'http://localhost:6969/allFriends';
  // tslint:disable-next-line:variable-name
  private _allFriends?: Array<Friend>;

  get allFriends(): Array<Friend> {
    // @ts-ignore
    return this._allFriends;
  }

  constructor(
    private addFriendService: AddFriendService) {
  }

  onSubmit(): void {
    this.submitted = true;
    this.addFriendService.addFriend(this.friend).subscribe(data => console.log(data), error => console.log(error));
    this.getFriends(this.url);
  }

  public async getFriends(url: string): Promise<any> {
    return await fetch(this.url, {method: 'get', headers: {'content-type': 'application/json'}})
      .then(response => {
        return response.json();
      })
      .then(response => this._allFriends = response);
  }

  ngOnInit(): any {
    // @ts-ignore
    this.getFriends(this.url).then(response => console.log(this._allFriends));
  }
}
