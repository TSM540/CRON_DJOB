/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, ParseIntPipe, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, ExecutionStatus } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async createTask(@Body() taskData: Omit<Task,  'isExecuted'>): Promise<Task> {
    return this.tasksService.createTask(taskData);
  }

  @Get()
  async listTasks(): Promise<Task[]> {
    return this.tasksService.listTasks();
  }
  
  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(parseInt(id, 10));
  }
  @Put(':id')
  async updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('isExecuted') isExecuted: ExecutionStatus
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, isExecuted);
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }

  @Post(':id/run')
  async runTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.runTask(id);
  }


}
