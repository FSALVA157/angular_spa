import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, IHeroe } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes: IHeroe[]=[];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
     }

  verHeroe(index: number){
    this._router.navigate(['/heroe',index]);
  }

}
