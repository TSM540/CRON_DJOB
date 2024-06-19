/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task, ExecutionStatus } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: Omit<Task, 'id' | 'isExecuted'>): Promise<Task> {
    return this.prisma.task.create({ data: { ...data, isExecuted: ExecutionStatus.Idle } });
  }

  async listTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async runTask(id: number): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data: { isExecuted: ExecutionStatus.Executed },
    });
  }

  
  async getTaskById(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }
  async updateTaskStatus(id: number, isExecuted: ExecutionStatus): Promise<Task> {
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: { isExecuted: isExecuted },
    });
    console.log(updatedTask);
    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return updatedTask;
  }

  async deleteTask(id: number): Promise<Task> {
    const deletedTask = await this.prisma.task.delete({
      where: { id },
    });
    if (!deletedTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    console.log("Task deleted successfully!");
    return deletedTask;
  }
}
