import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      <h1>欢迎来到Angular的世界</h1>
      <nav>
        <a routerLink="/user">我的</a>
        <a routerLink="/members">Angular成员</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent { }
