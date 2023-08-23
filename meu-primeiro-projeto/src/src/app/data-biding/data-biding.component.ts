import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = "Dener";
  public idade: number = 29;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "data:image/jpeg;base64,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"
  public imgTitle: string = "Property Binding"

  public position: {x: number, y:number} = { x: 0, y: 0}

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
