import { Component, OnInit } from "@angular/core";
import { HttpService } from "app/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-icons",
  templateUrl: "./icons.component.html",
  styleUrls: ["./icons.component.css"]
})
export class IconsComponent implements OnInit {
  newSellingItem = {
    name: "",
    description: "",
    isSell: true,
    sellPrice: "",
    isLend: false,
    condition: "",
    location: ""
  };
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {}
  handleSubmit() {
    this._httpService.create(this.newSellingItem).subscribe((data: any) => {
      if (data.hasOwnProperty("err")) {
        console.log(data);
      } else {
        this._router.navigate(["/"]);
      }
    });
    console.log(this.newSellingItem);
  }

  handleCancel() {
    this._router.navigate(["/"]);
  }
}
