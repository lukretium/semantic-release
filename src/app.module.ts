import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppV2Controller } from './appV2.controller';

@Module({
  imports: [],
  controllers: [AppController, AppV2Controller],
  providers: [],
})
export class AppModule {}
