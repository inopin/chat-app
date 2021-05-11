import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimetableComponent} from './components/timetable/timetable.component';
import {JournalComponent} from './components/journal/journal.component';
import {ChatComponent} from './components/chat/chat.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ConversationComponent} from './components/conversation/conversation.component';

const routes: Routes = [

  {path: 'timetable', component: TimetableComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'chat', component: ChatComponent, children: [
      {path: 'conversation/:id', component: ConversationComponent}
    ]},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
