import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Groups {
  data: {
    chatUserId: number;
    userId: number;
    chatGroupsInfo: [
      {
        groupId: number;
        groupTitle: string;
        unreadMessages: number;
      }
    ];
  };
}
export interface Unread {
  code: string;
  data: {
    groupId: number;
    unreadMessages: number;
  };
}
export interface Message {
  data: {
    numberOfParticipants: number;
    messages: [
      {
        text: string;
        'file': {
          'fileName': string;
            'apiUrl': string;
        };
        userInfo: {
          firstName: string;
          lastName: string;
          userId: number;
        };
      }
    ];
  };
}


@Injectable({providedIn: 'root'})
export class HttpService {
  urlGroup = 'assets/Json/groups.json';
  urlUnread = 'assets/Json/unread.json';

  constructor(private http: HttpClient) {
  }

  getGroup(): Observable<Groups> {
    return this.http.get<Groups>(this.urlGroup);
  }

  getUnread(): Observable<any> {
    return this.http.get(this.urlUnread);
  }
  getMessages(id: any): Observable<any> {
    return this.http.get<Message>(`assets/Json/messages_id_${id}.json`);
  }

}

