import { Field, Int, ObjectType } from "@nestjs/graphql";

/*

type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post!]!
}
*/

@ObjectType()
export class Author{
    @Field(type=> Int)
    id : number;

    @Field({ nullable : true})
    firstName?:string;

    @Field({ nullable : true})
    lastName?:string;

    // @Field(type=> [])
    // posts
}