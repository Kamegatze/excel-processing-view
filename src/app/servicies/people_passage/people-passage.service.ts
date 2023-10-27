import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/pages/page';
import { ServiceMany } from '../service-many';

@Injectable({
  providedIn: 'root'
})
export class PeoplePassageService implements ServiceMany{

    constructor() { }

    handlerGetItemsByForeignKey(foreignKey: number, pageNumber : number, pageSize : number): Observable<Page<any>> {
        throw new Error('Method not implemented.');
    }
    handlerGetItemsAll(pageNumber: number, pageSize: number): Observable<Page<any>> {
        throw new Error('Method not implemented.');
    }
    handlerGetItemById(id: number): Observable<any> {
        throw new Error('Method not implemented.');
    }
}
