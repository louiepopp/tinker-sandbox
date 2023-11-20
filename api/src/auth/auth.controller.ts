import {
    Controller,
    Request,
    Post,
    UseGuards,
    Body,
    BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { signUpDto } from './dto/signup.dto';
import { PersonService } from 'src/person/person.service';
import { PersonWithEmailExistsException } from 'src/person/person.exception';

@Controller('auth')
export class AuthController {
    constructor(
    private authService: AuthService,
    private personService: PersonService,
    ) {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

  @Post('signup')
  async create(@Body() signUpDto: signUpDto) {
      try {
          const person = await this.personService.create(signUpDto);
          return this.authService.login(person);
      } catch (e) {
          if (e instanceof PersonWithEmailExistsException) {
              throw new BadRequestException();
          }
      }
  }
}
