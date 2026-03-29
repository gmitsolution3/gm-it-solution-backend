import {
  Controller,
  Patch,
  Get,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UpsertUserDto } from './dto/upsert-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  // 🔥 UPSERT USER
  @Patch()
  async upsert(@Body() dto: UpsertUserDto) {
    const data = await this.service.upsert(dto);

    return {
      success: true,
      message: 'User upserted successfully',
      data,
    };
  }

  // 🔥 GET USER BY EMAIL
  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    const data = await this.service.findByEmail(email);

    return {
      success: true,
      data,
    };
  }

  // 🔥 MAKE ADMIN
  @Patch(':email/make-admin')
  async makeAdmin(@Param('email') email: string) {
    const data = await this.service.makeAdmin(email);

    return {
      success: true,
      message: 'User promoted to admin',
      data,
    };
  }

  // 🔥 DELETE USER
  @Delete(':email')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('email') email: string) {
    const data = await this.service.remove(email);

    return {
      success: true,
      message: 'User deleted successfully',
      data,
    };
  }
}