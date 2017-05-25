import { Component, OnInit } from '@angular/core';
import { Book } from '../book-detail/book';




@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})


export class ListBooksComponent implements OnInit {

  title: String = "hello world from Listof Books";
  //listofBooks: any[] = ["Book one","Book two","Book three"]; 

  listofBooks: Book[] = [
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

  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() { }

  ngOnInit() {
  }

}
