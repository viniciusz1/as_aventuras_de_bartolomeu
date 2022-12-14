import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    private $subject: Subject<KeyboardEvent> = new Subject();

    constructor() {
        const body = document.getElementsByTagName('body')[0];

        body.addEventListener('keydown', (e: KeyboardEvent) => {
            this.$subject.next(e);
        })
    }
    
    // public setcachorro(decisao: boolean){
    //     return
    // }

    public getcachorro(){

    }

    public keydown(): Observable<KeyboardEvent> {
        return this.$subject.asObservable();
    }
    public unkeydown(){
     return this.$subject
  }
}
