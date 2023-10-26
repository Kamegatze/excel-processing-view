import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/pages/page';
import { ServiceMany } from '../service-many';
import { ServiceConfig } from '../service.config';
import { HttpClient } from '@angular/common/http';
import { PeoplePassage } from 'src/app/model/people_passage/people-passage';

@Injectable({
  providedIn: 'root'
})
export class PeoplePassageService implements ServiceMany{

    private url = `${ServiceConfig.url}/people_passage`;

    constructor(private http: HttpClient) { }

    handlerGetItemsByForeignKey(foreignKey: number, pageNumber : number, pageSize : number): Observable<Page<PeoplePassage>> {
        return this.http.get<Page<PeoplePassage>>(`${this.url}/by_sheet/${foreignKey}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }
    handlerGetItemsAll(pageNumber: number, pageSize: number): Observable<Page<PeoplePassage>> {
        throw new Error('Method not implemented.');
    }
    handlerGetItemById(id: number): Observable<PeoplePassage> {
        throw new Error('Method not implemented.');
    }
}
