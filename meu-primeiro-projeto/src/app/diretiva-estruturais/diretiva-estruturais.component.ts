import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-estruturais',
  templateUrl: './diretiva-estruturais.component.html',
  styleUrls: ['./diretiva-estruturais.component.scss']
})
export class DiretivaEstruturaisComponent {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  
  public list: Array<{nome: string, idade: number}> = [
    { nome: "Pedro Henrique", idade: 19 },
    { nome: "Henrique", idade: 20},
    { nome: "zé", idade: 50}
  ];

  public nome: string = 'pedro';
  
  // setInterval(()=>{
  //   if(this.condition){
  //     this.condition = false;
  //   }else{
  //     this.condition = true;
  //   }
  // }, 2000);

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Bia", idade: 20})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }
}
