import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  providers: [BookService]
})

export class AddbookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  abook = new Book(21, 'The Jungle Book' , 'Kipling');


  //@Input() book: Book;

  submitted = false;

  onSubmit() { 
    console.log("submitted");
    this.submitted = true; 
    this.bookService.addBook(this.abook);
}

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.abook); }

  ngOnInit() {
  }

 
}
