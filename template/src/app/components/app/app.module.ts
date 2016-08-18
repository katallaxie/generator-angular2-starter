import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from '../+about';
import { HomeModule } from '../+home/home.module';
import { CommonsModule } from '../../common';
import { ServicesModule } from '../../services';

import {
  AppConfig,
  ENV_PROVIDERS
} from '../../config';

@NgModule({
  imports: [
    AboutModule,
    BrowserModule,
    HomeModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CommonsModule.forRoot(),
    ServicesModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: AppConfig.HTML5_BASE
    },
    ENV_PROVIDERS
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
