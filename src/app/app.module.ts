import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {FormsModule} from "@angular/forms";
import { TaskComponent } from './task/task.component';
import {TaskService} from "./service/task.service";
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    TaskComponent,
    TaskListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
