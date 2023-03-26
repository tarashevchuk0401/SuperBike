import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const material = [
  MatSlideToggleModule
]

@NgModule({
  exports: [material],
  imports: [material ]
})
export class MaterialModule { }
