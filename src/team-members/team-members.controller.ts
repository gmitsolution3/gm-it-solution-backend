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

import { TeamMembersService } from './team-members.service';

import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';

@Controller('team-members')
export class TeamMembersController {
  constructor(private readonly service: TeamMembersService) {}

  // CREATE NEW TEAM MEMBER
  @Post()
  async create(@Body() dto: CreateTeamMemberDto) {
    const data = await this.service.create(dto);

    return {
      success: true,
      message: 'Team member created successfully',
      data,
    };
  }

  // GET ALL TEAM MEMBER
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return {
      success: true,
      message: 'Team members fetched successfully',
      data,
    };
  }

  // GET ONE TEAM MEMBER
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);

    return {
      success: true,
      message: 'Team member fetched successfully',
      data,
    };
  }

  // UPDATE ONE TEAM MEMBER
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTeamMemberDto,
  ) {
    const data = await this.service.update(id, dto);

    return {
      success: true,
      message: 'Team member updated successfully',
      data,
    };
  }

  // DELETE ONE TEAM MEMBER
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);

    return {
      success: true,
      message: 'Team member deleted successfully',
      data,
    };
  }
}