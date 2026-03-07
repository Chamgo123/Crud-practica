import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Práctica Crud', completed: false }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    task.id = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id || 0)) + 1 : 1;
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}