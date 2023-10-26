import { Component, OnInit } from '@angular/core';
import { FileService } from '../servicies/file/file.service';
import { ETypeData } from '../infinite-scroll/etype-data';

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
