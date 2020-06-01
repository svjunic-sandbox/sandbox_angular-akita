import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '~/environments/environment';

import { enableAkitaProdMode } from '@datorama/akita';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopComponent } from './pages/top/top.component';

// akita production modeを有効にするらしい
if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [AppComponent, TopComponent, HeaderComponent, FooterComponent ],
  imports: [
    environment.production ? [] : AkitaNgDevtools,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TopComponent },
      { path: 'entity-store', component: TopComponent}
    ]),
    FormsModule // 使うかわからんが
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
