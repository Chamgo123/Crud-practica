import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  taskList: Task[] = [];
  newTaskTitle: string = '';
  taskToEdit: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.taskList = this.taskService.getTasks();
  }

  // Operaciones CRUD
  createTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = { 
        title: this.newTaskTitle, 
        completed: false 
      };
      this.taskService.addTask(newTask);
      this.newTaskTitle = '';
      this.refreshList();
    }
  }

  prepareEdit(task: Task): void {
    this.taskToEdit = { ...task };
  }

  saveUpdate(): void {
    if (this.taskToEdit) {
      this.taskService.updateTask(this.taskToEdit);
      this.taskToEdit = null;
      this.refreshList();
    }
  }

  deleteTask(id: number | undefined): void {
    if (id !== undefined) {
      this.taskService.deleteTask(id);
      this.refreshList();
    }
  }
}