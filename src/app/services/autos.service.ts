import { Injectable } from '@angular/core';
import { Auto } from '../Interfaces/auto.interface';
import { Observable, of } from 'rxjs';

const mockAuto: Auto[] = [
  {
    marca: 'Ford',
    modelo: 'mustang',
    anio: 2010,
    motor: '3.2 v',
    color: 'azul',
  },
  {
    marca: 'Ford',
    modelo: 'mustang',
    anio: 2010,
    motor: '3.2 v',
    color: 'azul',
  },
  {
    marca: 'Ford',
    modelo: 'mustang',
    anio: 2010,
    motor: '3.2 v',
    color: 'azul',
  },
  {
    marca: 'Ford',
    modelo: 'mustang',
    anio: 2010,
    motor: '3.2 v',
    color: 'azul',
  },
];

@Injectable()
export class AutosService {
  constructor() {}

  public getuatos(): Observable<Auto[]> {
    return of
    (mockAuto);
  }
}
