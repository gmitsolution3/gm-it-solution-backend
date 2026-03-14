import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SlidersController } from './sliders.controller';
import { SlidersService } from './sliders.service';

import { Slider, SliderSchema } from './slider.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Slider.name,
        schema: SliderSchema,
      },
    ]),
  ],
  controllers: [SlidersController],
  providers: [SlidersService],
})
export class SlidersModule {}
