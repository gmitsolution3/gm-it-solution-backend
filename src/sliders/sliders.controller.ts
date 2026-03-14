import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { SlidersService } from './sliders.service';
import { CreateSliderDto, UpdateSliderDto } from './dto/slider.dto';
import { successResponse } from 'utils';

@Controller('sliders')
export class SlidersController {
  constructor(private readonly sliderService: SlidersService) {}

  // CREATE SLIDER API
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSliderDto: CreateSliderDto) {
    const slider = await this.sliderService.create(createSliderDto);

    return successResponse(slider, 'Slider created successfully.');
  }

  // GET ALL SLIDER API
  @Get()
  async findAll() {
    const sliders = await this.sliderService.findAll();

    return successResponse(sliders, 'All sliders list.');
  }

  // GET SINGLE SLIDER API
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const singleSlider = await this.sliderService.findOne(id);

    return successResponse(singleSlider, `Slider for id-${id}`);
  }

  // UPDATE SLIDER API
  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updateSliderDto: UpdateSliderDto,
  ) {
    const updatedSlider = await this.sliderService.updateOne(
      id,
      updateSliderDto,
    );

    return successResponse(updatedSlider, 'Slider updated successfully.');
  }

  // DELETE SLIDER API

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    const deletedSlider = await this.sliderService.deleteOne(id);

    return successResponse(deletedSlider, 'Slider deleted successfully.');
  }
}
