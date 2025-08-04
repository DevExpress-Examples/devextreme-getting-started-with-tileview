import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTileViewModule } from 'devextreme-angular/ui/tile-view';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTileViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
