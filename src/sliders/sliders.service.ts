import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Slider, TSlider } from './slider.schema';
import { CreateSliderDto, UpdateSliderDto } from './dto/slider.dto';

@Injectable()
export class SlidersService {
  constructor(@InjectModel(Slider.name) private SliderModel: Model<TSlider>) {}

  // CREATE NEW SLIDER
  async create(createSliderDto: CreateSliderDto): Promise<Slider> {
    const result = this.SliderModel.create(createSliderDto);

    return result;
  }

  // GET ALL SLIDER
  async findAll(): Promise<Slider[]> {
    const sliders = await this.SliderModel.find({}).sort({ createdAt: -1 });

    return sliders;
  }

  // GET ONE SLIDER
  async findOne(id: string): Promise<Slider> {
    const slider = await this.SliderModel.findOne({ _id: id });

    if (!slider) {
      throw new NotFoundException('Slider not found!');
    }

    return slider;
  }

  // UPDATE A SLIDER
  async updateOne(
    id: string,
    updateSliderDto: UpdateSliderDto,
  ): Promise<Slider> {
    const updatedSlider = await this.SliderModel.findByIdAndUpdate(
      id,
      updateSliderDto,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedSlider) {
      throw new NotFoundException('Slider not found!');
    }

    return updatedSlider;
  }

  // DELETE A SLIDER
  async deleteOne(id: string): Promise<Slider> {
    const deletedSlider = await this.SliderModel.findByIdAndDelete(id);

    if (!deletedSlider) {
      throw new NotFoundException('Slider not found!');
    }

    return deletedSlider;
  }
}
