export interface DictionaryConfigItem {
  field: string,
  headerName: string,
  filter: string | boolean,
  sort: boolean
}

export abstract class BaseDictionaryModel {
  id: number;
  name: string;

  constructor() {
    this.id = null;
    this.name = '';
  }

  abstract getDictionaryConfig(): DictionaryConfigItem[];
  abstract getDisplayKey(): string;

  getValueKey() {
    return 'id';
  }
}

export interface BaseDataModel {
  apiUrl: string;
  modelName: string;
}
