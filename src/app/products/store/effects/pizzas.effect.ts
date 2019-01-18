import { PizzasService } from './../../services/pizzas.service';
import { Injectable } from "@angular/core";

import * as pizzaActions from '../actions/pizzas.action';
import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from 'rxjs';


@Injectable()
export class PizzasEffect {
    
    constructor(private actions$: Actions, private pizzasService: PizzasService){}
    
    @Effect()
    loadPizzas$ = this.actions$.pipe(
        // listens to actions of the type LOAD_PIZZAS
        ofType(pizzaActions.LOAD_PIZZAS),
        // switch from the actions$ observable to another one
        switchMap( () => {
            // call the service for getting all the pizzas
            return this.pizzasService.getPizzas().pipe(
                // map the pizzas observable onto the LoadPizzasSuccess observable<Actions>
                map( pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError( error => of(new pizzaActions.LoadPizzasFail(error)))
            );
        })
    );
}