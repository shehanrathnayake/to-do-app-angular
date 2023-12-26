import {TaskDto} from "../dto/task-dto";
import {Injectable} from "@angular/core";

@Injectable()
export class TaskService {

  private taskList: Array<TaskDto> = [
    new TaskDto(1, 'Design user interface'),
    new TaskDto(2, 'Setup database connection', true),
    new TaskDto(3, 'Buy a domain'),
    new TaskDto(4, 'Push all the workings to GitHub'),
    new TaskDto(5, 'Review the app', true)
  ];
  addTask(task: TaskDto) {
    this.taskList.push(task);
  }

  deleteTask(task: TaskDto) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  getAllTasks() {
    return this.taskList;
  }
}
