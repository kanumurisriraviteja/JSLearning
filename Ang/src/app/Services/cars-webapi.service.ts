import { Injectable } from '@angular/core';
import {Icar} from '../home/child/ICar';
import { Observable } from 'rxjs';
import {GenericHttpService} from '../generic-http.service';


@Injectable()
export class CarsWebapiService {

  constructor(private genericHttp: GenericHttpService) { }

  GetCarsWebApi(): Observable<Icar[]> {
        // return [
        // { Type:"ford", Model:5, Color:"white" },
        // { Type:"city", Model:6, Color:"blue" },
        // { Type:"bmw", Model:7, Color:"green" },
        // { Type:"audi", Model:9, Color:"red" }
        //       ];

        // this is error and locks to the console.
        // return this._genericHttp.HttpGetService("https://localhost:44330/api/Car/GetCar1");

        return this.genericHttp.HttpGetService('Car/GetAllCar');
    }

    InsertCarWebApi(car: Icar): Observable<Icar[]> {
      return this.genericHttp.HttpInsertService('Car/PostCar', car);
    }
    UpdateCarWebApi(car: Icar): Observable<Icar[]> {
      return this.genericHttp.HttpEditService('Car/PutCar', car);
    }
    DeleteCarWebApi(car: Icar): Observable<Icar[]> {
      return this.genericHttp.HttpDeleteService('Car/DeleteCar', car.model);
    }

    GetCarsWebApiPromise(): Promise<any> {
      return this.genericHttp.HttpGetServicePromise('Car/GetCar');
    }

    GetExpensiveCarsJsonServer(): Observable<Icar[]> {
      return this.genericHttp.HttpGetServiceJsonServer('cars');
  }
}
