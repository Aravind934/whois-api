import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainEntity } from './models/domain.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"sqlite",
      database:"db",
      entities:["dist/**/*.entity{.js,.ts}"],
      synchronize:true
    }),
    TypeOrmModule.forFeature([DomainEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
