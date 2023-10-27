import { Injectable } from '@angular/core';
import { ServiceConfig } from '../service.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/pages/page';
import { File } from 'src/app/model/files/file';
import { Service } from '../service';

@Injectable({
  providedIn: 'root'
})
export class FileService implements Service{

  private readonly fileUrl = `${ServiceConfig.url}/file`;

  constructor(
    private http: HttpClient,
  ) { }

  handlerGetItemsAll(pageNumber: number, pageSize: number): Observable<Page<File>> {
    return this.http
      .get<Page<File>>(`${this.fileUrl}/all?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  handlerGetItemById(id: number): Observable<File> {
    return this.http.get<File>(`${this.fileUrl}/${id}`);
  }
}
