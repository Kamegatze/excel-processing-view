import { Component, OnInit } from '@angular/core';
import { ETypeData } from '../infinite-scroll/etype-data';
import { ActivatedRoute } from '@angular/router';
import { PeoplePassageService } from '../servicies/people_passage/people-passage.service';

@Component({
  selector: 'app-people-passage',
  templateUrl: './people-passage.component.html',
  styleUrls: ['./people-passage.component.scss']
})
export class PeoplePassageComponent implements OnInit {

  selectData !:ETypeData;

  foreignKey !: number;

  constructor(private router: ActivatedRoute, protected service: PeoplePassageService) {}

  ngOnInit(): void {
    this.router.params
      .subscribe(url => {
        this.foreignKey = url['sheetId'];
        if(this.foreignKey === undefined) {
            this.selectData = ETypeData.ALL_DATA
        } else {
            this.selectData = ETypeData.DATA_BY_FOREIGN_KEY
        }
      });
  }

}
