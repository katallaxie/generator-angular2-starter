import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {
  NavbarComponent,
  ToolbarComponent
} from '../../common';
import {
  AppConfig
} from '../../config';

/**
 * This class represents the main application component.
 * Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components
 * (HomeComponent, AboutComponent).
 */
@Component({
  selector: 'app',
  templateUrl: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    ToolbarComponent
  ]
})

export class AppComponent implements OnInit {

  public title: string = AppConfig.HTML5_TITLE;

  ngOnInit() {
    document.title = this.title;
  }

}
