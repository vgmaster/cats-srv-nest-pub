import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user', description: 'Логин' })
  @IsString({ message: 'Должно быть строкой' })
  @IsString({ message: 'Некорректный логин' })
  readonly login: string;

  @ApiProperty({ example: '12345', description: 'пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;
}
