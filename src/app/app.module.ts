import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '~/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { enableAkitaProdMode } from '@datorama/akita';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopComponent } from './pages/top/top.component';
import { Example1Component } from './pages/example1/example1.component';

// akita production modeを有効にするらしい
if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [AppComponent, TopComponent, HeaderComponent, FooterComponent, Example1Component],
  imports: [
    environment.production ? [] : AkitaNgDevtools,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TopComponent },
      { path: 'example1', component: Example1Component }
    ]),
    FormsModule // 使うかわからんが
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
