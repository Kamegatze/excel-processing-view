import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';

const routes: Routes = [
  { path: '', component: FileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
