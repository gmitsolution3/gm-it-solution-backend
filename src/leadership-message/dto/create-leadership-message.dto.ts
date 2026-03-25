import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsIn,
} from 'class-validator';

export class CreateLeadershipMessageDto {
  @IsString()
  @IsIn(['chairman', 'ceo'])
  role: 'chairman' | 'ceo';

  @IsString()
  @IsNotEmpty()
  quote: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsUrl()
  @IsNotEmpty()
  videoUrl: string;
}