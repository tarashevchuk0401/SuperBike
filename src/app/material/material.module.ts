import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';



const material = [
  MatSlideToggleModule,
  MatButtonModule,
  
]

@NgModule({
  exports: [material],
  imports: [material ]
})
export class MaterialModule { }
