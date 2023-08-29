import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from '../../services/food-list.service';
import { FoodList } from 'src/app/module/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void{
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (error) => console.log(error)
    });

    this.foodListService.emitEvent.subscribe({
      next: (res : any) => {
        alert(`Olha você add => ${res.nome}`);
        return this.foodList.push(res);
      }
  });
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error: (error) => error
    })
  }

  public foodListEdit(value: string, id: number){
    this.foodListService.foodListEdit(value, id).subscribe({
      next: (res) => {
        return console.log(res);
      },
      error: (error) => error
    })
  }
}
