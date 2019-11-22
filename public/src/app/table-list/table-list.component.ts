import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  rentedItems: any[] = [];
  boughtItems: any[] = [];

  // TODO: Get userId from Session
  userId = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._httpService.getUsersRentedItems(this.userId)
      .subscribe((data: any) => {
        this.rentedItems = data.items;
      });
    this._httpService.getUsersBoughtItems(this.userId)
      .subscribe((data: any) => {
        this.boughtItems = data.items;
      });
  }

}
