import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  IsDateString,
  IsNumber,
  IsBoolean,
  IsEmail,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

class SalaryRangeDto {
  @IsNumber()
  min: number;

  @IsNumber()
  max: number;

  @IsString()
  currency: string;

  @IsString()
  period: string;
}

export class CreateJobPostingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  department: string;

  @IsString()
  location: string;

  @IsString()
  employmentType: string;

  @IsString()
  workplaceType: string;

  @IsString()
  experienceLevel: string;

  @IsString()
  experienceRequired: string;

  @ValidateNested()
  @Type(() => SalaryRangeDto)
  salaryRange: SalaryRangeDto;

  @IsString()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  responsibilities: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  requirements: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  skills: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  benefits: string[];

  @IsDateString()
  applicationDeadline: string;

  @IsNumber()
  openings: number;

  @IsBoolean()
  isActive: boolean;

  @IsEmail()
  contactEmail: string;
}
