import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/admin.guard';
import { RatingsService } from './ratings.service';
import { Rating } from './ratings.model';
import { PageOptionsDto } from 'src/common/dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('Рейтинги')
@UseGuards(JwtAuthGuard)
@Controller('ratings')
export class RatingsController {
  constructor(private ratingService: RatingsService) {}

  @ApiOperation({ summary: 'Получение всех рейтингов' })
  @ApiResponse({ status: 200, type: [Rating] })
  @Get()
  async getAll(@Query() pageOptionsDto: PageOptionsDto) {
    return await this.ratingService.getAllRatings(pageOptionsDto);
  }

  @ApiOperation({ summary: 'Изменение рейтинга' })
  @ApiResponse({ status: 200, type: [Rating] })
  @UseGuards(AdminGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRatingDto: UpdateRatingDto,
  ) {
    return await this.ratingService.updateById(id, updateRatingDto);
  }

  @ApiOperation({ summary: 'Удаление рейтинга' })
  @ApiResponse({ status: 200, type: Number })
  @UseGuards(AdminGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.ratingService.deleteById(id);
  }
}
