export class BaseDictionaryModel {
  id: number;

  constructor() {
    this.id = null;
  }
}


export class Hero extends BaseDictionaryModel {
  name: string;
  email: string;
  age: number;

  constructor() {
    super()
    this.name = '';
    this.email = '';
    this.age = 11;
  }
}
