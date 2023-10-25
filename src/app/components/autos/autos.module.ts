import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosComponent } from './autos.component';
import { AutosService } from 'src/app/services/autos.service';
import { SwitchModule } from '../switch/switch.module';

@NgModule({
  declarations: [AutosComponent],
  exports: [AutosComponent],
  imports: [CommonModule, SwitchModule],
  providers:[AutosService]
})
export class AutosModule {}
