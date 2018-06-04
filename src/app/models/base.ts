export interface DictionaryConfigItem {
  key: string,
  title: string,
  filterable: boolean,
  sortable: boolean
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
    return 'id'
  }

}
