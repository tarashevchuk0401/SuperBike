import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




const material = [
  MatSlideToggleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
  
]

@NgModule({
  exports: [material],
  imports: [material ]
})
export class MaterialModule { }
