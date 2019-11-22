import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lend-history',
  templateUrl: './lend-history.component.html',
  styleUrls: ['./lend-history.component.css']
})
export class LendHistoryComponent implements OnInit {
  lentItems: any[] = [];
  soldItems: any[] = [];

  // TODO: Get userId from Session
  userId = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._httpService.getUsersLentItems(this.userId)
      .subscribe((data: any) => {
        this.lentItems = data.items;
      });
    this._httpService.getUsersSoldItems(this.userId)
      .subscribe((data: any) => {
        this.soldItems = data.items;
      });
  }

}
