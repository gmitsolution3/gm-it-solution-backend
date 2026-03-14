import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlidersModule } from './sliders/sliders.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI as string),
    SlidersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
