import { Module } from '@nestjs/common';
import { DatabaseController } from './controllers/app.controller';
import { DatabaseService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class AppModule {}
