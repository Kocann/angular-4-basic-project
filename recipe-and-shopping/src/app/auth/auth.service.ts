import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token:string;

  constructor(private router: Router){}

  signupUser(email: string, pass: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(
      error => console.log(error)
    );
  }

  singInUser(email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(
      response => {
        this.router.navigate(['/'])
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string)=>{
            this.token = token;
          }
        )
      }
    )
    .catch(
      error => console.log(error)
    )
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
        .then(
          (token: string)=>{
            this.token = token;
          }
        )
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = '';
  }
}