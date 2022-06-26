import { Injectable } from '@angular/core';
import { Icar } from '../home/child/ICar';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class CarsService {

    // TODO how to pass if needed.
    // constructor(c :number) {
    //     console.log('static car service is called'+c);
    // }

    GetCars(): Icar[] {
        return [
            { type: 'ford', model: 11, color: 'white' },
            { type: 'honda', model: 12, color: 'blue' },
            { type: 'tata', model: 13, color: 'green' },
            { type: 'toyota', model: 14, color: 'red' }
        ];
    }
    GetMoreCars(): Observable<Icar[]> {

        const cars: Icar[] =
            [
                { type: 'bmw', model: 15, color: 'white' },
                { type: 'audi', model: 16, color: 'blue' }
            ];

        return of(cars).pipe(delay(500));
    }
}
