import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { GuestbookData } from './guestbook.component';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  
  constructor(private http: HttpClient) { }

  public getGuestbook(): Observable<GuestbookData[]> {
    const promise: Promise<GuestbookData[]> = new Promise<GuestbookData[]>((resolve, reject) => {
      resolve(this.dataStore);
      console.log("get")
      console.log(this.dataStore)
    });
    const observable: Observable<GuestbookData[]> = from(promise);
    return observable;
  }

  public postGuestbook(guestbookData: GuestbookData): Observable<Object> { 
    this.dataStore.push(guestbookData);
    console.log("post")
    console.log(this.dataStore)
    const promise = new Promise((resolve,reject)=>{resolve({})});
    return from(promise);
  }
  
  /* Version 1 with in memory local storage */
  dataStore: GuestbookData[] = [{ name: 'James', message: 'Great concert !' },
  { name: 'Kate', message: 'Lot of fun .. thanks' }];

  /* Version 2 with backend API and mongo database
  private guestbookUrl:string = "http://backend.minikube.local/guestbook";

  constructor(private http:HttpClient) { }

  public getGuestbook(): Observable<GuestbookData[]> {
    return this.http.get<GuestbookData[]>(this.guestbookUrl);
  }

  public postGuestbook(guestbookData:GuestbookData) :  Observable<Object>{
    return this.http.post(this.guestbookUrl,guestbookData);
  }
  */
}
