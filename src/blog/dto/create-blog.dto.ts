import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  excerpt: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  readTime: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;
}