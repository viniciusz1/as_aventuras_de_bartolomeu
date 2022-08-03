import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  setRanking(){
    let nivel1 = this.get('nivel-1')
    let nivel2 = this.get('nivel-2')
    let total = nivel1 + nivel2
    let jogador = this.get('jogador')
    let oldranking = this.get('ranking')
    oldranking.push({nivel1, nivel2, total, jogador})
    this.set('ranking', oldranking)
    this.remove('nivel-1')
    this.remove('nivel-2')
    this.remove('jogador')
  }


  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) as string);
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
