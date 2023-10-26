import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';
import { SheetsComponent } from './sheets/sheets.component';

const routes: Routes = [
  { path: '', component: FileComponent},
  {path: 'sheets/:fileId', component: SheetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
