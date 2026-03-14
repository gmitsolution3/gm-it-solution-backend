import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSliderDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  titleHighlight: string;

  @IsString()
  @IsNotEmpty()
  slogan: string;

  @IsString()
  @IsNotEmpty()
  ctaOne: string;

  @IsString()
  @IsNotEmpty()
  ctaTwo: string;
}

export class UpdateSliderDto extends PartialType(CreateSliderDto) {}
