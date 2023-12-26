import {Component, Input} from '@angular/core';
import {TaskDto} from "../dto/task-dto";
import {TaskService} from "../service/task.service";

@Component({
  selector: 'app-task',
  styleUrl: './task.component.scss',
  template: `
    <div class="flex justify-between items-center p-2 hover:bg-slate-300 dark:hover:bg-gray-700 hover:cursor-pointer">
        <div class="flex items-center">
            <input [checked]="task.status" type="checkbox"
                    id="chk-{{task.id}}"
                    class="checkbox checkbox--dark">
            <label for="chk-{{task.id}}" class="label label--dark">
                {{task.description}}
            </label>
        </div>
        <button (click)="onTaskDelete(task)" type="button" class="btn--delete btn--delete--dark">Delete</button>
    </div>
  `
})
export class TaskComponent {
  @Input()
  task!: TaskDto;

  constructor(private service: TaskService) {
  }


  onTaskDelete(task: TaskDto) {
    this.service.deleteTask(task);
  }
}
