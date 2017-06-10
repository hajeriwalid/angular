import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpModule, JsonpModule } from '@angular/http';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { InMemoryDbService } from 'angular-in-memory-web-api';


/*
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
    { id: 20, name: 'Tornados', author: 'renard' }
    ];
*/


@Injectable() //specifies that Angular may need to inject other dependencies into this service.
export class BookService {

    /*
    //  mock data source. 
     getBooks(): Book[] {
        return listofBooks;
     }
     */

    private booksUrl = 'app/listbooks';  // URL to web api

    constructor(private http: Http) { }

     // .then(heroes => this.heroes = heroes);

     //  using in memory web api
     
     getBooks(): Promise<Book[]> {
        return this.http.get(this.booksUrl)
                .toPromise()
                .then(response => response.json().data as Book[])
                .catch(this.handleError);
    
    }

    getBook(id: number): Promise<Book> {
        const url = `${this.booksUrl}/${id}`;
    
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Book)
            .catch(this.handleError);
    }

    /*
     addBook(mybook : Book):void {
         console.log("Book Service : " + JSON.stringify(mybook));
         listofBooks.push(mybook);
     }
     */

     private headers = new Headers({'Content-Type': 'application/json'});

    update(book: Book): Promise<Book> {
        const url = `${this.booksUrl}/${book.id}`;
        return this.http
            .put(url, JSON.stringify(book), {headers: this.headers})
            .toPromise()
            .then(() => book)
            .catch(this.handleError);
    }

/*
    delete(book: Book): void {
        this.delete(book.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
*/
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
  }


}