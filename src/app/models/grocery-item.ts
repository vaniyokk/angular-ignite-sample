import {
  BaseDictionaryModel,
  BaseDataModel,
  DictionaryConfigItem
} from './base';

export class GroceryItem extends BaseDictionaryModel implements BaseDataModel {
  public apiUrl = 'api/groceries';  // URL to web api
  public modelName = 'GroceryItem';

  name: string;
  type: string;

  constructor() {
    super();
    this.name = '';
    this.type = '';
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
        field: 'name',
        headerName: 'Name',
        filter: true,
        sort: true
      },
      {
        field: 'type',
        headerName: 'Type',
        filter: true,
        sort: true
      },
    ];
  }

  getDisplayKey(): string {
    return 'name';
  }
}
