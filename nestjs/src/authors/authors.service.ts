import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorService {
  constructor() {}

  async findOneById(id: number): Promise<Author> {
    return { id: 1, firstName: 'majeed', lastName: 'dl' };
  }
}
