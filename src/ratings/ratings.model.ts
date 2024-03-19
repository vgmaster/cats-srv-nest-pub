import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ResourceType } from './types';
import { ApiProperty } from '@nestjs/swagger';

interface IRatingCreationAttrs {
  url: string;
  resourceType: ResourceType;
  tag: string;
  shows: number;
  likes: number;
  dislikes: number;
  isVisible: boolean;
  rawTags: string;
}

@Table({
  tableName: 'ratings',
  underscored: true,
})
export class Rating extends Model<Rating, IRatingCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'https://ya.ru', description: 'Ссылка' })
  @Column({ type: DataType.STRING, allowNull: false })
  url: string;

  @ApiProperty({ example: 'image', description: 'Тип ресурса' })
  @Column({ type: DataType.STRING, allowNull: false })
  resourceType: string;

  @ApiProperty({ example: 'котэ', description: 'Внутренний тег' })
  @Column({ type: DataType.STRING, allowNull: false })
  tag: string;

  @ApiProperty({ example: '0', description: 'Количество показов' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  shows: number;

  @ApiProperty({ example: '0', description: 'Количество лайков' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  likes: number;

  @ApiProperty({ example: '0', description: 'Количество дизлайков' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  dislikes: number;

  @ApiProperty({ example: 'true', description: 'Отображать в боте' })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isVisible: boolean;

  @ApiProperty({
    example: 'теги с сайта, кастомные',
    description: 'Дополнительные внешние теги',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  rawTags: string;
}
