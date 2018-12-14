import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frete } from './Frete';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FreteService {
    // private _Url = 'http://127.0.0.1:8887/frete.json';

    constructor(private _http: HttpClient) { }

    getFrete(cep: string): Observable<any> {
        return this._http.get(cep);
        /*return this._http.get(this._Url).pipe(
            map((response: Response) => <Frete>response.json()))
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);*/
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
