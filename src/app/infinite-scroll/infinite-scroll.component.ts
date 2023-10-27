import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Page } from '../model/pages/page';
import { ETypeData } from './etype-data';
import { ServiceMany } from '../servicies/service-many';
import { Service } from '../servicies/service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
  @Input() template!: TemplateRef<any>;

  @Input() service!: Service;

  @Input() selectData!: ETypeData;

  @Input() foreignKey!: number;

  @Input() pageSize = 50;

  @Input() isTable = false;

  private pageNumber = 0;

  items$!: Observable<Page<any>>;

  private deleteItems!: Subscription;

  private deleteNextItems!: Subscription;

  ngOnInit(): void {
    switch (this.selectData) {
      case ETypeData.ALL_DATA:
        this.items$ = this.service.handlerGetItemsAll(
          this.pageNumber,
          this.pageSize
        );
        break;
      case ETypeData.DATA_BY_FOREIGN_KEY:
        const service = <ServiceMany>this.service;
        this.items$ = service.handlerGetItemsByForeignKey(
          this.foreignKey,
          this.pageNumber,
          this.pageSize
        );
        break;
    }
  }

  ngOnDestroy(): void {
    this.deleteItems?.unsubscribe();
    this.deleteNextItems?.unsubscribe();
  }

  onScroll(): void {
    this.deleteItems = this.items$.subscribe((items) => {
      if (items.currentPage < items.countPage) {
        this.deleteNextItems?.unsubscribe();
        switch (this.selectData) {
          case ETypeData.ALL_DATA:
            this.deleteNextItems = this.service
              .handlerGetItemsAll(++this.pageNumber, this.pageSize)
              .subscribe((nextItems) => {
                nextItems.content = [...items.content, ...nextItems.content];
                this.items$ = of<Page<any>>(nextItems);
              });
            break;

          case ETypeData.DATA_BY_FOREIGN_KEY:
            const service = <ServiceMany>this.service;
            this.deleteNextItems = service
              .handlerGetItemsByForeignKey(
                this.foreignKey,
                ++this.pageNumber,
                this.pageSize
              )
              .subscribe((nextItems) => {
                nextItems.content = [...items.content, ...nextItems.content];
                this.items$ = of<Page<any>>(nextItems);
              });

            break;
        }
      }
    });
  }
}
