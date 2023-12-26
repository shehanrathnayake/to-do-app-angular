import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  template: `
    <div class="flex justify-between border-b-2 p-2">
      <h1 class="{{color}} text-center text-3xl font-medium hover:text-red-500">To Do APP</h1>

    <button class="border p-1, rounded-md bg-gradient-to-t from-lime-400 transition-colors duration-200 active:bg-gradient hover:drop-shadow cursor-pointer hover:bg-lime-500"
            (click)=onClick()>
        Change Color
    </button>
    </div>
  `
})
export class HeaderComponent {
  @Input()
  color: string = 'text-sky-600';

  onClick() {
    const colors = ['red', 'green', 'blue', 'black', 'orange'];

    this.color = `text-${colors[Math.floor(Math.random() * colors.length)]}-500`;
    console.log(this.color);
  }
}
