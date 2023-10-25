import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Auto } from 'src/app/Interfaces/auto.interface';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent {

  public listAutos$!: Observable<Auto[]>;

  constructor(private autoService: AutosService){
    this.getListAutos()
  }

  private getListAutos(){
    this.listAutos$ = this.autoService.getuatos().pipe(take(1))
  }
}
