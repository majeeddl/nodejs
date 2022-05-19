import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './authors.service';
import { Author } from './models/author.model';

@Resolver((of) => Author)
export class AuthorResolver {
  /**
   *
   */
  constructor(private authorService: AuthorService) {}

  /*
    type Query {
  author(id: Int!): Author
}
*/
  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return await this.authorService.findOneById(1);
  }
}
