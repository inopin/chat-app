import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {NavComponent} from './components/nav/nav.component';
import {ContentComponent} from './components/content/content.component';
import {ChatComponent} from './components/chat/chat.component';
import {ConversationComponent} from './components/conversation/conversation.component';
import {TimetableComponent} from './components/timetable/timetable.component';
import {JournalComponent} from './components/journal/journal.component';
import {SettingsComponent} from './components/settings/settings.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ContentComponent,
    ChatComponent,
    ConversationComponent,
    TimetableComponent,
    JournalComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
