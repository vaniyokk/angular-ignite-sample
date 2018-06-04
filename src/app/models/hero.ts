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
        key: 'id',
        title: 'ID',
        filterable: true,
        sortable: true
      },
      {
        key: 'email',
        title: 'email',
        filterable: true,
        sortable: false
      },
      {
        key: 'age',
        title: 'Age',
        filterable: false,
        sortable: true
      },
    ]
  }

  getDisplayKey(): string {
    return 'name';
  }
}
