import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rating } from './ratings.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [RatingsService],
  controllers: [RatingsController],
  imports: [SequelizeModule.forFeature([Rating]), AuthModule],
})
export class RatingsModule {}
