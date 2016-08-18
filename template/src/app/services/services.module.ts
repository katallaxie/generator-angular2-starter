import { NgModule, ModuleWithProviders } from '@angular/core';

import { NameListService } from './name-list';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [NameListService]
    };
  }
}
