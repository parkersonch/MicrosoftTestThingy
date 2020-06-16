import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = 'https://graph.microsoft.com/v1.0/';

  calender: any[];

  calenderBehaviorSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
  }

  async getCalender() {
    this.http.get<any[]>(`${this.apiUrl}me/calender`)
    .subscribe(calender => {
      this.calenderBehaviorSubject.next(calender);
    });
  }

  getCalenderSubject(): BehaviorSubject<any[]> {
    return this.calenderBehaviorSubject;
  }
}
