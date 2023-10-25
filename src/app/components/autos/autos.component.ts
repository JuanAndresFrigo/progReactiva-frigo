import { Component, OnDestroy } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Auto } from 'src/app/Interfaces/auto.interface';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss'],
})
export class AutosComponent implements OnDestroy{
  public listAutos$!: Observable<Auto[]>;

  constructor(private autoService: AutosService) {
    this.getListAutos();
  }

  private getListAutos() {
    this.listAutos$ = this.autoService.getAutos().pipe(take(1));
  }

  public cargarNuevaLista(filterParaAplicar: string) {
    // el swicht apagado retorna la lista original
    if (!filterParaAplicar) {
      this.getListAutos();
      return;
    }

    // si el switch se prende, se filtra el listado
    let listaAutos: Auto[] = [];
    this.autoService.getAutos().pipe(take(1)).subscribe((autos: Auto[]) => (listaAutos = autos));

    this.listAutos$ = of(listaAutos.filter((auto: Auto) => auto.anio === filterParaAplicar));
  }

  ngOnDestroy(): void {
    // No se requiere el ondestroy, ya que se utiliza el take(1), no hay subscripciones abiertas
    this.listAutos$ = of([])
  }
}
