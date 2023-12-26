import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
      <div class="dark:bg-gray-600 h-screen">
          <app-header/>
          <app-new-task/>
          <app-task-list/>
      </div>
  `
})
export class AppComponent {
  title = 'todo-app-angular';
}
