import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from '../model/pages/page';
import { ETypeData } from './etype-data';
import { ServiceMany } from '../servicies/service-many';
import { Service } from '../servicies/service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

    @Input() template !: TemplateRef<any>;

    @Input() service !: Service;

    @Input() selectData !: ETypeData;

    @Input() foreignKey !: number;

    @Input() pageSize = 50;

    @Input() isTable = false

    private pageNumber = 0; 

    items$ !: Observable<Page<any>>; 

    ngOnInit(): void {
        switch(this.selectData) {
            case ETypeData.ALL_DATA:
                this.items$ = this.service.handlerGetItemsAll(this.pageNumber, this.pageSize);
                break;
            case ETypeData.DATA_BY_FOREIGN_KEY:
                const service = <ServiceMany>this.service;
                this.items$ = service.handlerGetItemsByForeignKey(this.foreignKey, this.pageNumber, this.pageSize);
                break;
            }
    }

    onScroll() : void {
        this.items$
            .subscribe(items => {
                if(items.currentPage < items.countPage) {
                    switch(this.selectData) {
                        case ETypeData.ALL_DATA:
                            this.service
                                .handlerGetItemsAll(++this.pageNumber, this.pageSize)
                                .subscribe(nextItems => {
                                    nextItems.content = [...items.content, ...nextItems.content];
                                    this.items$ = of<Page<any>>(nextItems);
                                });    
                            break;
                        
                        case ETypeData.DATA_BY_FOREIGN_KEY:
                            const service = <ServiceMany>this.service;
                            service.handlerGetItemsByForeignKey(this.foreignKey, ++this.pageNumber, this.pageSize)
                                .subscribe(nextItems => {
                                    nextItems.content = [...items.content, ...nextItems.content];
                                    this.items$ = of<Page<any>>(nextItems);
                                });
                            
                            break;
                    }               
                }
            })
    }
}
