import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSliderDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  highlight: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  ctaPrimary: string;

  @IsString()
  @IsNotEmpty()
  ctaSecondary: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}

export class UpdateSliderDto extends PartialType(CreateSliderDto) {}
