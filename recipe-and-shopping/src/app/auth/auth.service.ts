import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  signupUser(email: string, pass: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(
      error => console.log(error)
    );
  }

  singInUser(email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(
      response => console.log(response)
    )
    .catch(
      error => console.log(error)
    )
  }
}