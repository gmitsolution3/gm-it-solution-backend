import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  IsMongoId,
} from 'class-validator';

export class CreateCaseStudyDto {
  @IsMongoId()
  @IsNotEmpty()
  portfolioId: string;

  @IsString()
  @IsNotEmpty()
  overview: string;

  @IsString()
  @IsNotEmpty()
  challenge: string;

  @IsString()
  @IsNotEmpty()
  solution: string;

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
  results: string;
}