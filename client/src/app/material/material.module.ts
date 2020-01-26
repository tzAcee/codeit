import { NgModule } from '@angular/core';

import {MatButtonToggleModule,
  MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule, MatCard
} from '@angular/material';

const MaterialModules = [MatButtonToggleModule,
              MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule,
              MatCardModule];

@NgModule({
  imports: [ MaterialModules
  ],
  exports: [ MaterialModules

  ]
})
export class MaterialModule { }
