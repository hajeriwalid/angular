import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddbookComponent } from './addbook/addbook.component';

RouterModule.forRoot([
  {
    path: 'listbooks',
    component: ListBooksComponent
  },
    {
    path: 'addbook',
    component: AddbookComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
