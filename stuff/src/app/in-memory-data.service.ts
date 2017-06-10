import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    let listbooks: Book[] = [
    { id: 11, name: 'Mr. Nice' , author: 'jean' },
    { id: 12, name: 'Narco' , author: 'jean'},
    { id: 13, name: 'Bombasto' , author: 'jean'},
    { id: 14, name: 'Celeritas', author: 'jean' },
    { id: 15, name: 'Magneta' , author: 'jean'},
    { id: 16, name: 'RubberMan', author: 'renard' },
    { id: 17, name: 'Dynama' , author: 'renard'},
    { id: 18, name: 'Dr IQ', author: 'renard' },
    { id: 19, name: 'Magma', author: 'renard' },
    { id: 20, name: 'Tornados', author: 'renard' }
    ];

    return {listbooks};
  }
}