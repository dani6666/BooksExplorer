import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalTestService {

  private globalTestData = {
    config: { a: 1, b: 2 }
  };
  constructor(private http: HttpClient) {
   }

  getConfig(): Observable<any> {
    return this.http.get<any>('/api/config', {
      params: {
        q: 'test'
      }
    });
  }

  saveTestData(data){
    return this.http.post('/api/config', data);
  }

  sendMessage(msg) {
    return this.http.post('/api/messages', msg)
  }

}
