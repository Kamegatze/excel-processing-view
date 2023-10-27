import { Component, OnDestroy, OnInit } from '@angular/core';
import { SheetsService } from '../servicies/sheets/sheets.service';
import { ETypeData } from '../infinite-scroll/etype-data';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss'],
})
export class SheetsComponent implements OnInit, OnDestroy {
  foreignKey!: number;

  selectData!: ETypeData;

  private deleteRouter!: Subscription;

  constructor(
    protected sheetsService: SheetsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((url) => {
      this.foreignKey = url['fileId'];
      if (this.foreignKey === undefined) {
        this.selectData = ETypeData.ALL_DATA;
      } else {
        this.selectData = ETypeData.DATA_BY_FOREIGN_KEY;
      }
    });
  }

  ngOnDestroy(): void {
      this.deleteRouter?.unsubscribe();
  }
}
