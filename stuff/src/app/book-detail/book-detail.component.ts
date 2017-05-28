import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})


//Always export the component class because you'll always import it elsewhere.
export class BookDetailComponent implements OnInit {

  constructor() { }

  //book: Book;



  ngOnInit() {
  }

  @Input() book: Book;

}
