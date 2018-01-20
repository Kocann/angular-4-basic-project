import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token:string;

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