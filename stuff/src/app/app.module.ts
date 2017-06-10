import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {Http} from '@angular/http'
import { AppComponent } from './app.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookService } from './book.service';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

RouterModule.forRoot([
  {
    path: 'listbooks',
    component: ListBooksComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    SearchItemsComponent,
    BookDetailComponent,
    ListBooksComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'listbooks',
        component: ListBooksComponent
      }
    ]),
     RouterModule.forRoot([
      {
        path: 'addbook',
        component: AddbookComponent
      }
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
