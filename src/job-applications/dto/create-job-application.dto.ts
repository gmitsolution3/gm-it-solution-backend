import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsUrl,
  IsMongoId,
} from 'class-validator';

export class CreateJobApplicationDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsMongoId()
  jobId: string;

  @IsString()
  @IsNotEmpty()
  coverLetter: string;

  @IsUrl()
  @IsOptional()
  portfolioUrl?: string;

  @IsUrl()
  @IsNotEmpty()
  resume: string;
}