import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  @Input() public switchLabel: string = '';
  @Input() public switchId: string = 'flexSwitchCheckDefault';
  @Output() public onSwitched: EventEmitter<string> =
    new EventEmitter<string>();

  public testeo(switchIdClicked: HTMLInputElement) {
    // Si el switch se prende, se emite el valor del id
    if(switchIdClicked.checked){
      this.onSwitched.emit(switchIdClicked.id);
      return
    }
    //si el switch se apaga, se emite cadena vacía
    this.onSwitched.emit('');
  }
}
