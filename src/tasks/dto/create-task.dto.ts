import { Module } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
    
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string;
}