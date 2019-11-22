import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  registerUser(newUser) {
    return this._http.post("/api/users", newUser);
  }

  getUsersRentedItems(userId){
    return this._http.get("api/item/all/rented/" + userId);
  }

  getUsersBoughtItems(userId){
    return this._http.get("api/item/all/bought/" + userId);
  }
  getUsersLentItems(userId){
    return this._http.get("api/item/all/lent/" + userId);
  }
  getUsersSoldItems(userId){
    return this._http.get("api/item/all/sold/" + userId);
  }
}
