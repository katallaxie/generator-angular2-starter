import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar';
import { NavbarComponent } from './navbar';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ToolbarComponent,
    NavbarComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    RouterModule,
    ToolbarComponent
  ]
})
export class CommonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonsModule,
      providers: []
    };
  }
}
