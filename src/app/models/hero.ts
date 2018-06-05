import { BaseDictionaryModel, DictionaryConfigItem } from "./base";

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

  public getDictionaryConfig(): DictionaryConfigItem[] {
    return [
      {
        field: 'id',
        headerName: 'ID',
        filter: true,
        sort: true
      },
      {
        field: 'email',
        headerName: 'Email',
        filter: true,
        sort: false
      },
      {
        field: 'age',
        headerName: 'Age',
        filter: false,
        sort: true
      },
    ]
  }

  getDisplayKey(): string {
    return 'name';
  }
}
