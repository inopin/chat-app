import { Component, OnInit } from '@angular/core';
import {Groups, HttpService, Unread} from '../../http.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [HttpService]
})
export class ChatComponent implements OnInit {

  groups: Groups;
  unread: Unread;
  message: any;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {

    this.httpService.getGroup()
      .subscribe(groups => {
        this.groups = groups;
      });

    // this.httpService.getUnread()
    //   .subscribe(unread => {
    //     this.unread = unread;
    //     console.log(this.unread.data, '123');
    //   });
  }

}
