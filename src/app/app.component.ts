import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <app-header/>
    <app-new-task/>
    <app-task-list/>


  `
})
export class AppComponent {
  title = 'todo-app-angular';
}
