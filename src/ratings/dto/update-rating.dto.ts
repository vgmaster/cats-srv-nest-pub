import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateRatingDto {
  @ApiProperty({ example: 'http://ya.ru/pic.jpg', description: 'url' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly url: string;

  @ApiProperty({ example: 'image', description: 'Тип' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly resource_type: string;

  @ApiProperty({ example: 'котэ', description: 'Тег' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly tag: string;

  @ApiProperty({ example: '12', description: 'Показов' })
  @IsInt({ message: 'Должно быть целым числом' })
  @IsOptional()
  readonly shows: number;

  @ApiProperty({ example: '5', description: 'Лайков' })
  @IsInt({ message: 'Должно быть целым числом' })
  @IsOptional()
  readonly likes: number;

  @ApiProperty({ example: '10', description: 'Дизлайков' })
  @IsInt({ message: 'Должно быть целым числом' })
  @IsOptional()
  readonly dislikes: number;

  @ApiProperty({ example: 'false', description: 'Видим' })
  @IsBoolean({ message: 'Должно быть булевым' })
  @IsOptional()
  readonly is_visible: boolean;

  @ApiProperty({ example: 'кот, смешно', description: 'Теги сайта' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly raw_tags: string;
}
