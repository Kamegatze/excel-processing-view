import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import {HttpClientModule} from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollDownDirective } from './directives/scroll/scroll-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ScrollDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
