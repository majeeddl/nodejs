import { Field, Int, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class Post{
    @Field(type => Int)
    id:number;

    @Field()
    title:string;

    @Field(type => Int , {nullable :true})
    votes?:number
}


/*

type Post {
  id: Int!
  title: String!
  votes: Int
}

*/