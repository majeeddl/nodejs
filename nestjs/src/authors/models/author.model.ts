import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';

/*

type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post!]!
}
*/

@ObjectType({ description : 'test of code first graphql '})
export class Author {
  @Field((type) => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  // @Field(type=> [Post])
  // posts : Post[]
}
