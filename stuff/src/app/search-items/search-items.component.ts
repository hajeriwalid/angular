import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})

export class SearchItemsComponent implements OnInit {
  
  name: string;
  type: string;

  constructor() { }

  ngOnInit() {
  }

  search(name: string, type: string) {
    this.name = name;
    this.type = type;
    console.log("we have received you in a an object !");
    console.log(this.name, this.type);
  }

}
