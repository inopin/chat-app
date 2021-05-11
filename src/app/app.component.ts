import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';
  // в боевом проекте иконки и их запись выводятся в оддельный сервис
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'book', sanitizer.bypassSecurityTrustResourceUrl('assets/images/book.svg')
    );
    iconRegistry.addSvgIcon(
      'case', sanitizer.bypassSecurityTrustResourceUrl('assets/images/case.svg')
    );
    iconRegistry.addSvgIcon(
      'chat', sanitizer.bypassSecurityTrustResourceUrl('assets/images/chat.svg')
    );
    iconRegistry.addSvgIcon(
      'icon-admin', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-admin.svg')
    );
  }
}
