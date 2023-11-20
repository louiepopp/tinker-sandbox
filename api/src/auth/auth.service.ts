import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PersonService } from 'src/person/person.service';
import { Person } from 'src/person/entities/person.entity';

@Injectable()
export class AuthService {
    constructor(private readonly personService: PersonService, private jwtService: JwtService) { }

    async validatePerson(email: string, password: string): Promise<any> {
        const person = await this.personService.getPerson({ email });
        if (!person) return null;
        const passwordValid = await bcrypt.compare(password, person.password)
        if (!person) {
            throw new NotAcceptableException('Could not find the person');
        }
        if (person && passwordValid) {
            return person;
        }
        return null;
    }

    async login(person: Person) {
        const payload = { email: person.email, sub: person._id };
        return {
            name: person.name,
            email: person.email,
            access_token: this.jwtService.sign(payload),
        };
    }
}