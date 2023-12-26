import { Component } from '@angular/core';
import {TaskDto} from "../dto/task-dto";
import {TaskService} from "../service/task.service";

@Component({
  selector: 'app-new-task',
  styleUrl: './new-task.component.scss',
  template: `
    <form class="form" (ngSubmit)="onSubmit(txtElm)">
        <input name="txt" #txtElm ngModel type="text" class="form__input form__input--dark">
        <button class="form__btn form__btn--dark">ADD</button>
    </form>
  `

})
export class NewTaskComponent {
  constructor(private service: TaskService) {
  }

  onSubmit(txtElm: HTMLInputElement) {
    const description = txtElm.value.trim();
    if(!description) {
      txtElm.focus();
      txtElm.select();
      return;
    }

    this.service.addTask(
      new TaskDto(this.service.getAllTasks().length, description)
    )

    txtElm.value = '';
    txtElm.focus();
  }
}
