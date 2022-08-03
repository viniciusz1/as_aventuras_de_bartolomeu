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
    let fase1 = this.get('fase-1')
    let fase2 = this.get('fase-2')
    let total = fase1 + fase2
    let jogador = this.get('jogador')

    this.set('ranking', {fase1, fase2, total, jogador})

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
