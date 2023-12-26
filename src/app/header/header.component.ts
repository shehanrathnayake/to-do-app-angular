import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  template: `
    <div class="flex justify-between border-b-2 p-2 dark:border-gray-700">
      <h1 class="text-sky-600 text-center text-3xl font-medium hover:text-red-500">To Do APP</h1>
    </div>
  `
})
export class HeaderComponent {

}
