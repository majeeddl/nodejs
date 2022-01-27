

interface Json {
  toJSON(): string;
}


class PersonThree implements Json {
  constructor(private firstName: string, private lastName: string) {}
  
  toJson(): string {
    return JSON.stringify(this);
  }
}