import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';
import { SheetsComponent } from './sheets/sheets.component';
import { PeoplePassageComponent } from './people-passage/people-passage.component';

const routes: Routes = [
  { path: '', component: FileComponent},
  {path: 'sheets/:fileId', component: SheetsComponent},
  {path: 'sheets/people_passage/:sheetId', component:PeoplePassageComponent},
  {path: 'people_passageAll', component: PeoplePassageComponent},
  {path: 'sheetsAll', component: SheetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
