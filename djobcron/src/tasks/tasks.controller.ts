/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, ExecutionStatus } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async createTask(@Body() taskData: Omit<Task, 'id' | 'isExecuted'>): Promise<Task> {
    return this.tasksService.createTask(taskData);
  }

  @Get()
  async listTasks(): Promise<Task[]> {
    return this.tasksService.listTasks();
  }

  @Post(':id/run')
  async runTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.runTask(id);
  }

  @Patch(':id/status')
  async updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: ExecutionStatus
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
