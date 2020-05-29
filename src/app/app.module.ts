import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './pages/top/top.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [AppComponent, TopComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: TopComponent }]),
    FormsModule // 使うかわからんが
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
