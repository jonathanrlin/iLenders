import { Component, OnInit } from "@angular/core";
import { HttpService } from "app/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.css"]
})
export class TypographyComponent implements OnInit {
  newLendingItem = {
    name: "",
    description: "",
    isSell: false,
    lendPrice: "",
    isLend: true,
    condition: "",
    location: ""
  };
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {}
  handleSubmit() {
    this._httpService.create(this.newLendingItem).subscribe((data: any) => {
      if (data.hasOwnProperty("err")) {
        console.log(data);
      } else {
        this._router.navigate(["/"]);
      }
    });
    console.log(this.newLendingItem);
  }

  handleCancel() {
    this._router.navigate(["/"]);
  }
}
