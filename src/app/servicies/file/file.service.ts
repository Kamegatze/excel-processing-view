import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConfig } from '../service.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly fileUrl = `${ServiceConfig.url}/file`;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  public handlerGetFileAll() : Observable<object> {
    return this.http.get<object>(`${this.fileUrl}/all`);
  }
}
