import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosComponent } from './autos.component';
import { AutosService } from 'src/app/services/autos.service';

@NgModule({
  declarations: [AutosComponent],
  exports: [AutosComponent],
  imports: [CommonModule],
  providers:[AutosService]
})
export class AutosModule {}
