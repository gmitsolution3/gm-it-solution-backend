import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  features: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  technologies: string[];

  @IsString()
  @IsNotEmpty()
  image: string;
}
