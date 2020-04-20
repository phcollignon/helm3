import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { GuestbookData } from './guestbook.component';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  
  private guestbookUrl:string   = environment.backendUri;
  constructor(private http:HttpClient) { }

  public getGuestbook(): Observable<GuestbookData[]> {
    return this.http.get<GuestbookData[]>(this.guestbookUrl);
  }

  public postGuestbook(guestbookData:GuestbookData) :  Observable<Object>{
    return this.http.post(this.guestbookUrl,guestbookData);
  }
}
