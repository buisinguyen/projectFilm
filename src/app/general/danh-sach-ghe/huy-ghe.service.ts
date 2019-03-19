import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HuyGheService {
  constructor() { }

  // Xem lại

  beha = new BehaviorSubject(-1);
  setBeha(val){
    this.beha.next(val);
  }
  getBeha(){
    return this.beha.asObservable();
  }
}
