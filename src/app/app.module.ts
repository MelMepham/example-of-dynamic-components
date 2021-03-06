import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    DynamicContentComponent
  ],
  entryComponents: [
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
