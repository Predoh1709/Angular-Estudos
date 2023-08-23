import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir componente</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;

  public destruir: boolean = true;

  constructor(){ }

  ngOnInit(): void {
    setTimeout( () => {
      console.log(1);
    }, 5000)
  }

  public adicionar(): number{
    return this.valor += 1;
  }

  public destruirComponent(): void{
    this.destruir = false;
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
}
