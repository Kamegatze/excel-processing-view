import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConfig } from '../service.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/pages/page';
import { File } from 'src/app/model/files/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly fileUrl = `${ServiceConfig.url}/file`;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  public handlerGetFileAll(pageNumber: number, pageSize : number) : Observable<Page<File>> {
    return this.http
        .get<Page<File>>(`${this.fileUrl}/all?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
