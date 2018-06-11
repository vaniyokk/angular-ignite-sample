import {
  BaseDictionaryModel,
  BaseDataModel,
  DictionaryConfigItem
} from './base';

export class Hero extends BaseDictionaryModel implements BaseDataModel {
  public apiUrl = 'api/heroes';  // URL to web api
  public modelName = 'Hero';

  name: string;
  email: string;
  age: number;

  constructor() {
    super();
    this.name = '';
    this.email = '';
    this.age = 11;
  }

  public getDictionaryConfig(): DictionaryConfigItem[] {
    return [
      {
        field: 'id',
        headerName: 'ID',
        filter: 'agNumberColumnFilter',
        sort: true
      },
      {
        field: 'email',
        headerName: 'Email',
        filter: 'agTextColumnFilter',
        sort: false
      },
      {
        field: 'age',
        headerName: 'Age',
        filter: 'agNumberColumnFilter',
        sort: true
      },
    ]
  }

  getDisplayKey(): string {
    return 'name';
  }
}
