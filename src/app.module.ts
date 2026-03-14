import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SlidersModule } from './sliders/sliders.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { PortfoliosModule } from './portfolios/portfolios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('DB_URI'),
      }),
    }),
    SlidersModule,
    PortfoliosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
