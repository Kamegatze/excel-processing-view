import { Observable } from "rxjs";
import { Page } from "../model/pages/page";
import { Service } from "./service";

export interface ServiceMany extends Service {

  handlerGetItemsByForeignKey(foreignKey: number, pageNumber : number, pageSize : number): Observable<Page<any>>

}
