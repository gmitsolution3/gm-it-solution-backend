import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadershipMessageDto } from './create-leadership-message.dto';

export class UpdateLeadershipMessageDto extends PartialType(
  CreateLeadershipMessageDto,
) {}