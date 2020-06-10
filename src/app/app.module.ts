import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '~/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //アニメーション用

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';

import { enableAkitaProdMode } from '@datorama/akita';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopComponent } from './pages/top/top.component';
import { Example1Component } from './pages/example1/example1.component';
import { Example1matComponent } from './pages/example1mat/example1mat.component';
import { Example2Component } from './pages/example2/example2.component';
import { ViewchildComponent } from './pages/viewchild/viewchild.component';
import { CounterComponent } from './pages/counter/counter.component';
import { Example1sComponent } from './pages/example1s/example1s.component';
import { Sample1Component } from './components/sample1/sample1.component';
import { Example3Component } from './pages/example3/example3.component';
import { BrPipe } from './module/pipe/br.pipe';
import { Example4Component } from './example4/example4.component';
import { InlineStyleComponent } from './pages/inline-style/inline-style.component';

// akita production modeを有効にするらしい
if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [AppComponent, TopComponent, HeaderComponent, FooterComponent, Example1Component, Example1matComponent, Example2Component, ViewchildComponent, CounterComponent, Example1sComponent, Sample1Component, Example3Component, BrPipe, Example4Component, InlineStyleComponent],
  imports: [
    environment.production ? [] : AkitaNgDevtools,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: TopComponent },
        { path: 'inline-style', component: InlineStyleComponent },
        { path: 'example1s', component: Example1sComponent },
        { path: 'example1', component: Example1Component },
        { path: 'example1mat', component: Example1matComponent },
        { path: 'example2', component: Example2Component },
        { path: 'example3', component: Example3Component },
        { path: 'example4', component: Example4Component },
        { path: 'counter', component: CounterComponent },
        { path: 'viewchild', component: ViewchildComponent },
      ]
      //SPA
      // { useHash: true }
    ),
    FormsModule, // 使うかわからんが
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
