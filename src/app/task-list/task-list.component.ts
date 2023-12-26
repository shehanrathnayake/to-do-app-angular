import { Component } from '@angular/core';
import {TaskDto} from "../dto/task-dto";
import {TaskService} from "../service/task.service";

@Component({
  selector: 'app-task-list',
  styleUrl: './task-list.component.scss',
  template: `
    <div>
        @for(task of taskList; track task.id) {
            <app-task [task]="task" />
        } @empty {
            <p class="text-center mt-2">No tasks yet!</p>
        }
    </div>
  `

})
export class TaskListComponent {
  taskList: Array<TaskDto>;

  constructor(private service: TaskService) {
    this.taskList = service.getAllTasks();
  }
}
