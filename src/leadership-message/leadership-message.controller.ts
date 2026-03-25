import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { LeadershipMessageService } from './leadership-message.service';
import { CreateLeadershipMessageDto } from './dto/create-leadership-message.dto';
import { UpdateLeadershipMessageDto } from './dto/update-leadership-message.dto';

@Controller('leadership-message')
export class LeadershipMessageController {
  constructor(private readonly service: LeadershipMessageService) {}

  // CREATE NEW LEADER MESSAGE
  @Post()
  async create(@Body() dto: CreateLeadershipMessageDto) {
    const data = await this.service.create(dto);

    return {
      success: true,
      message: 'Message created successfully',
      data,
    };
  }

  // GET ALL LEADER MESSAGE
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return {
      success: true,
      data,
    };
  }

  // GET LEADER MESSAGE BY ROLE
  @Get(':role')
  async findByRole(@Param('role') role: string) {
    const data = await this.service.findByRole(role);

    return {
      success: true,
      data,
    };
  }

  // UPDATE LEADER MESSAGE BY ROLE
  @Patch(':role')
  async update(
    @Param('role') role: string,
    @Body() dto: UpdateLeadershipMessageDto,
  ) {
    const data = await this.service.updateByRole(role, dto);

    return {
      success: true,
      message: 'Message updated successfully',
      data,
    };
  }

  // DELETE LEADER MESSAGE BY ROLE
  @Delete(':role')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('role') role: string) {
    const data = await this.service.removeByRole(role);

    return {
      success: true,
      message: 'Message deleted successfully',
      data,
    };
  }
}
