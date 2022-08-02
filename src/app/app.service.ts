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

    public keydown(): Observable<KeyboardEvent> {
        return this.$subject.asObservable();
    }

}
