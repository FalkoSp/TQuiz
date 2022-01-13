import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FactorizerService {

  private url = "http://localhost:4200/primefactors/"

  // TODO warum muss ich hier private deklarieren?
  constructor(private http : HttpClient) { }

  factorize(n : number) : Observable<number[]> {
    const u : string = this.url+n
//    console.log(`Factorization of ${n} requested. Asking ${u}.`)
    return this.http.get<number[]>(u)
  }

}
