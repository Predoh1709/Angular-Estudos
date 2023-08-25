import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Pedro Henrique", idade: 19},
    { nome: "Henrique", idade: 20},
    { nome: "zé", idade: 50}
  ]

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }
}
