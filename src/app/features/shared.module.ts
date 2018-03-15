import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from '../common/convert-to-spaces.pipe';
import { StarComponent } from '../common/star.component';
@NgModule({
declarations:[
  ConvertToSpacesPipe,
  StarComponent,
],
exports:[
  CommonModule,
  FormsModule,
  ConvertToSpacesPipe,
  StarComponent,
]
})
export class SharedModule { }
