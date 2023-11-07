import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/pages/page';
import { ServiceMany } from '../service-many';
import { ServiceConfig } from '../service.config';
import { HttpClient } from '@angular/common/http';
import { Sheet } from 'src/app/model/sheet/sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetsService implements ServiceMany {

  private url = `${ServiceConfig.url}/sheet`

  constructor(private http: HttpClient) { }

  handlerGetItemsByForeignKey(foreignKey: number, pageNumber : number, pageSize : number): Observable<Page<Sheet>> {
    return this.http.get<Page<Sheet>>(`${this.url}/byFile/${foreignKey}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  handlerGetItemsAll(pageNumber: number, pageSize: number): Observable<Page<any>> {
    return this.http.get<Page<Sheet>>(`${this.url}/all?pageNumber=${pageNumber}&pageSize${pageSize}`);
  }
  handlerGetItemById(id: number): Observable<any> {
    return this.http.get<Sheet>(`${this.url}/${id}`);
  }
}
