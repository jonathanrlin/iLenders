import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  registerUser(newUser) {
    return this._http.post("/api/users", newUser);
  }
  create(newItem) {
    return this._http.post("/api/item/new", newItem);
  }
  getOne(id) {
    return this._http.get(`/api/item/one`, {
      params: new HttpParams().set("id", id)
    });
  }
}
