import { Upgrade } from './../models/upgrade';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {
  upgradeProto: Upgrade = {
    id: 0,
    name: "",
    price: 50,
    value: 1
  }
  constructor() { }
}
