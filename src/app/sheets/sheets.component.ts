import { Component, OnInit } from '@angular/core';
import { SheetsService } from '../servicies/sheets/sheets.service';
import { ETypeData } from '../infinite-scroll/etype-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {

    foreignKey !: number;

    selectData !: ETypeData;

    constructor(
        protected sheetsService: SheetsService, 
        private router: ActivatedRoute
        ) {}

    ngOnInit(): void {
        this.router.params.subscribe(url => {
            this.foreignKey = url['fileId'];
            console.log(this.foreignKey)
            if(this.foreignKey === undefined) {
                this.selectData = ETypeData.ALL_DATA;
            } else {
                this.selectData = ETypeData.DATA_BY_FOREIGN_KEY;
            }
        })
    }
}
