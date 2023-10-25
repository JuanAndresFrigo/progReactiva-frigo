import { Injectable } from '@angular/core';
import { Auto } from '../Interfaces/auto.interface';
import { Observable, of } from 'rxjs';

const mockAuto: Auto[] = [
  {
    marca: 'ford',
    modelo: 'mustang',
    anio: '2010',
    motor: 'V8 5.0L TiVCT',
    color: 'azul',
  },
  {
    marca: 'volkswagen',
    modelo: 'polo',
    anio: '2020',
    motor: '170TSI',
    color: 'rojo',
  },
  {
    marca: 'fiat',
    modelo: 'toro',
    anio: '2010',
    motor: 'T270',
    color: 'blanco',
  },
  {
    marca: 'ford',
    modelo: 'ranger',
    anio: '2018',
    motor: '3.0L V6 Turbo Diesel',
    color: 'azul',
  },
  {
    marca: 'volkswagen',
    modelo: 'virtus',
    anio: '2023',
    motor: '1.6L MSI',
    color: 'gris',
  },
  {
    marca: 'ford',
    modelo: 'Territory',
    anio: '2022',
    motor: '1.8L EcoBoost',
    color: 'blaco',
  },
  {
    marca: 'fiat',
    modelo: 'argo',
    anio: '2021',
    motor: '1.3 Firefly',
    color: 'blanco',
  },
  {
    marca: 'ford',
    modelo: 'raqnger raptor',
    anio: '2021',
    motor: 'Ecoboost 3.0L V6 Bi-Turbo',
    color: 'naranja',
  },
  {
    marca: 'volkswagen',
    modelo: 'taos',
    anio: '2021',
    motor: '1.4 TSI',
    color: 'negro',
  },
  {
    marca: 'ford',
    modelo: 'F-150',
    anio: '2022',
    motor: 'PowerBoost 3.5L V6 Híbrido',
    color: 'azul',
  },
  {
    marca: 'fiat',
    modelo: 'mobi',
    anio: '2020',
    motor: '1.0 Firefly',
    color: 'blanco',
  },
  {
    marca: 'volkswagen',
    modelo: 'vento',
    anio: '2023',
    motor: '350TSI',
    color: 'rojo',
  },
  {
    marca: 'ford',
    modelo: 'Bronco sport',
    anio: '2023',
    motor: 'Motor 2.0L EcoBoost',
    color: 'gris',
  },
  {
    marca: 'fiat',
    modelo: 'pulse',
    anio: '2021',
    motor: 'T200',
    color: 'rojo',
  },
  {
    marca: 'volkswagen',
    modelo: 'amarok',
    anio: '2015',
    motor: '2.0L 180 CV',
    color: 'blanco',
  },
];

@Injectable()
export class AutosService {
  constructor() {}

  public getAutos(): Observable<Auto[]> {
    return of(mockAuto);
  }
}
