import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from '../servicies/file/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit{

  protected files !: Observable<object>;

  constructor(private fileService: FileService) {}

  ngOnInit() : void {
    this.files = this.fileService.handlerGetFileAll();
  }

  check() : void {
    this.files.subscribe((item) => console.log(item));
  }
}
