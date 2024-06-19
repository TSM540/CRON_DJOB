/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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

  async updateTaskStatus(id: number, status: ExecutionStatus): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data: { isExecuted: status },
    });
  }
}
