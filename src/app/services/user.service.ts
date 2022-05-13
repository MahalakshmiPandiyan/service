import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users(){
    return[
      {name:'maha',gender:'female',age:21},
      {name:'lakshmi',gender:'female',age:24},
      {name:'pandiyan',gender:'male',age:23},
      {name:'revathi',gender:'female',age:22}
    ]
  }
}
