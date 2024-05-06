import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:userId')
  async getUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<any> {
    try {
      return {
        message: '사용자 정보 조회에 성공하였습니다.',
        data : await this.userService.getUserInfo(userId),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to get user info',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // @Get('/:userId/fundings')
  // async getUserFunding(
  //     @Param('userId', ParseIntPipe) id: number,
  // ): Promise<Funding[]> {
  //     return await this.fundingService.getUserFundings(userId);
  // }

  // @Get('/:userId/account')
  // async getUserAccount(
  //     @Param('userId', ParseIntPipe) userId: number,
  // ) {
  //     return await this.userService.getUserAccount(userId);
  // }

  @Post('/')
  async createUser(
    @Body() createUserDto : CreateUserDto,
  ): Promise<any> {
    try {
      return {
        message: '사용자 생성에 성공하였습니다.',
        data: await this.userService.createUser(createUserDto),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put('/:userId')
  async updateUser(
    @Param('userId', ParseIntPipe) userId : number,
    @Body() updateUserDto : UpdateUserDto,
  ): Promise<any> {
    try {
      return {
        message: '사용자 정보 갱신에 성공하였습니다.',
        data: await this.userService.updateUser(userId, updateUserDto),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to update user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('/:userId')
  async deleteUser(
    @Param('userId', ParseIntPipe) userId : number,
  ): Promise<any> {
    try {
      return {
        message: '사용자 정보 삭제에 성공하였습니다.',
        data: await this.userService.deleteUser(userId),
      };
    } catch (error) {
      throw new HttpException(
        'Failed to create delete user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
