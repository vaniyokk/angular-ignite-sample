import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', email: '11@gmail.com', age: 11 },
      { id: 12, name: 'Narco', email: '12@gmail.com',  age: 12 },
      { id: 13, name: 'Bombasto', email: '13@gmail.com',  age: 13 },
      { id: 14, name: 'Celeritas', email: '14@gmail.com',  age: 14 },
      { id: 15, name: 'Magneta', email: '15@gmail.com',  age: 15 },
      { id: 16, name: 'RubberMan', email: '16@gmail.com',  age: 16 },
      { id: 17, name: 'Dynama', email: '17@gmail.com',  age: 17 },
      { id: 18, name: 'Dr IQ', email: '18@gmail.com', age: 18 },
      { id: 19, name: 'Magma', email: '19@gmail.com',  age: 19 },
      { id: 20, name: 'Tornado', email: '20@gmail.com', age: 20 }
    ];
    return {heroes};
  }
}
