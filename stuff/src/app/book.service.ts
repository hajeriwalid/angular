import { Injectable } from '@angular/core';
import { Book } from './book-detail/book';
import { HttpModule, JsonpModule } from '@angular/http';



export const listofBooks: Book[] = [
    { id: 11, name: 'Mr. Nice' , author: 'jean' },
    { id: 12, name: 'Narco' , author: 'jean'},
    { id: 13, name: 'Bombasto' , author: 'jean'},
    { id: 14, name: 'Celeritas', author: 'jean' },
    { id: 15, name: 'Magneta' , author: 'jean'},
    { id: 16, name: 'RubberMan', author: 'renard' },
    { id: 17, name: 'Dynama' , author: 'renard'},
    { id: 18, name: 'Dr IQ', author: 'renard' },
    { id: 19, name: 'Magma', author: 'renard' },
    { id: 20, name: 'Tornado', author: 'renard' }
    ];

@Injectable() //specifies that Angular may need to inject other dependencies into this service.
export class BookService {

    //  getBooks(): void {} // stub, but could get data from anywhere—a web service, local storage, or a mock data source. 

     getBooks(): Book[] {
        return listofBooks;
     }

     addBook(mybook : Book):void {
         console.log("Book Service : " + JSON.stringify(mybook));
         listofBooks.push(mybook);
     }

}