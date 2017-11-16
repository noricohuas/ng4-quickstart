import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MembersComponent } from './/components/members/members.component';
import { MemberService } from './services/member.service';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
  RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent, UserComponent, MembersComponent],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
