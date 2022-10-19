import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero.interface';
import { HEROES } from './heroes/hero.mock';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[] = [];

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  constructor() {}
}
