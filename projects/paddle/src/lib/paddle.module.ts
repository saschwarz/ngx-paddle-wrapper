import { ModuleWithProviders, NgModule } from '@angular/core';
import { PaddleService, PaddleServiceConfig } from './paddle.service';

import { PaddleDirective } from './paddle.directive';
import { PaddleGlobalConfig } from './interfaces';

@NgModule({
  declarations: [PaddleDirective],
  imports: [],
  providers: [PaddleService],
  exports: [PaddleDirective],
})
export class PaddleModule {
  static forRoot(
    config: PaddleGlobalConfig
  ): ModuleWithProviders<PaddleModule> {
    return {
      ngModule: PaddleModule,
      providers: [{ provide: PaddleServiceConfig, useValue: config }],
    };
  }
}
