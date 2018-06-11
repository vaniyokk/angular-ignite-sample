import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr. Nice', email: '1@gmail.com', age: 1},
      { id: 2, name: 'Narco', email: '2@gmail.com',  age: 2 },
      { id: 3, name: 'Bombasto', email: '3@gmail.com',  age: 3 },
      { id: 4, name: 'Celeritas', email: '4@gmail.com',  age: 4 },
      { id: 5, name: 'Magneta', email: '5@gmail.com',  age: 5 },
      { id: 6, name: 'RubberMan', email: '6@gmail.com',  age: 6 },
      { id: 7, name: 'Dynama', email: '7@gmail.com',  age: 7 },
      { id: 8, name: 'Dr IQ', email: '8@gmail.com', age: 8 },
      { id: 9, name: 'Magma', email: '9@gmail.com',  age: 9 },
      { id: 10, name: 'Tornado', email: '10@gmail.com', age: 10 },
      { id: 11, name: 'Mr. Nice', email: '11@gmail.com', age: 11},
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
