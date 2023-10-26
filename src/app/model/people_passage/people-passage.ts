import { Time } from "@angular/common";

export interface PeoplePassage {

  id: number,

  last_name: string,

  first_name: string,

  patronymic: string,

  age: number,

  action: string,

  timeAction: Time

}
