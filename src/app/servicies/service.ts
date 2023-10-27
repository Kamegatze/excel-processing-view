import { Observable } from "rxjs";
import { Page } from "../model/pages/page";

export interface Service {
    handlerGetItemsAll(pageNumber: number, pageSize: number): Observable<Page<any>>;
    handlerGetItemById(id: number): Observable<any>
}
