import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', email: '11@gmail.com'},
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
    const groceries = [
      { id: 1, name: 'Milk', type: 'milk'},
      { id: 2, name: 'Cheese', type: 'milk'},
      { id: 3, name: 'Curd', type: 'milk'},
      { id: 4, name: 'Potato', type: 'veg'},
      { id: 5, name: 'Tomato', type: 'veg'},
      { id: 6, name: 'Cucumber', type: 'veg'},
      { id: 7, name: 'Cabadge', type: 'veg'},
      { id: 8, name: 'Apple', type: 'fruit'},
      { id: 9, name: 'Orange', type: 'fruit'},
      { id: 10, name: 'Banana', type: 'fruit'}
    ];
    return { heroes, groceries };
  }
}
