import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from '../models/authState.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStateSubj = new BehaviorSubject<AuthState>(null);  // BehaviorSubject ZAWSZE private !!!

  authState$: Observable<AuthState> = this.authStateSubj.asObservable();
  isLoggedIn$: Observable<boolean> = this.authState$.pipe(
    map(state => !!state)
  );
  isAdmin$: Observable<boolean> = this.authState$.pipe(
    map(state => state && state.role === 'admin')
  );

  constructor(private http: HttpClient) {
  }

  login(): void {
    this.http.get<AuthState[]>('/api/auth').subscribe( state => this.authStateSubj.next(state[1]));
  }

  logout() {
    this.authStateSubj.next(null);
  }
}
