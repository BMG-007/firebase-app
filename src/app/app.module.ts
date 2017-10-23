import { PageComponent } from './page/page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: PageComponent},
      {path: 'home', component: PageComponent},
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
