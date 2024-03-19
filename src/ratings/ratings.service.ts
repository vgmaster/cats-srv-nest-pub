import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rating } from './ratings.model';
import { PageOptionsDto } from 'src/common/dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Injectable()
export class RatingsService {
  constructor(@InjectModel(Rating) private ratingRepository: typeof Rating) {}

  async getById(id: number) {
    return await this.ratingRepository.findByPk(id);
  }

  async getAllRatings(pageOptionsDto: PageOptionsDto) {
    const { count, rows } = await this.ratingRepository.findAndCountAll({
      order: [['created_at', pageOptionsDto.order]],
      limit: pageOptionsDto.take,
      offset: pageOptionsDto.skip,
    });
    return { data: rows, count };
  }

  async updateById(id: number, newData: UpdateRatingDto) {
    const updatedRating = this.ratingRepository.update(newData, {
      where: { id },
      returning: true,
    });

    return updatedRating;
  }

  async deleteById(id: number) {
    return await this.ratingRepository.destroy({
      where: {
        id,
      },
    });
  }
}
