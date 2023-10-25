import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileService } from '../servicies/file/file.service';
import { Page } from '../model/pages/page';
import { File } from '../model//files/file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit{

  public files$ !: Observable<Page<File>>;

  private pageSize = 50;

  private pageNumber = 0;
 
  constructor(private fileService: FileService) {}

  ngOnInit() : void {
    this.files$ = this.fileService.handlerGetFileAll(this.pageNumber, this.pageSize);
  }

  onScroll() {
    this.files$.subscribe(pageCurrent => {
        if(pageCurrent.currentPage + 1 < pageCurrent.countPage) {
            this.fileService
            .handlerGetFileAll(++this.pageNumber, this.pageSize)
            .subscribe(pageNext => {
                pageNext.content = [...pageCurrent.content, ...pageNext.content]
                this.files$ = of<Page<File>>(pageNext);
                
            })
        }
    });
  }
}
