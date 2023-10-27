import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileService } from '../servicies/file/file.service';
import { Page } from '../model/pages/page';
import { File } from '../model//files/file';
import { ReturnStatement } from '@angular/compiler';
import { ETypeData } from '../infinite-scroll/etype-data';
import { ServiceMany } from '../servicies/service-many';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit{

    selectData = ETypeData.ALL_DATA;

    ngOnInit(): void {
    }

    constructor(protected fileService: FileService) {}
}
