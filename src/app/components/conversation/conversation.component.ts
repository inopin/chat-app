import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService, Message} from '../../http.service';
import {FormControl, FormGroup} from '@angular/forms';





@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  messages: Message;
  id: number;

  constructor( private route: ActivatedRoute,
               private httpService: HttpService) { }

  ngOnInit(): void {
   this.getParams();
  }


  getParams() {
    this.route.params.subscribe((params: Params) => {

      this.id = params.id;
      this.httpService.getMessages(this.id)
        .subscribe(messages => {
          this.messages = messages;
          console.log(this.messages.data.messages);
        });
    });
  }
}
