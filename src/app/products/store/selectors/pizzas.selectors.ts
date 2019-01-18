import { Pizza } from './../../models/pizza.model';
import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromRout from '../../../store';

export const getPizzaState = createSelector(
    fromFeature.getProductsState, 
    (state: fromFeature.ProductsState) => state.pizzas
);



export const getAllPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getAllPizzasEntities, entities => {
    return Object.keys(entities).map( id => entities[id]);
})
export const getPizzasLoaded = createSelector(getPizzaState,fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState,fromPizzas.getPizzasLoading);

export const getSelectedPizza = createSelector( getAllPizzasEntities, fromRout.getRouterState, 
    (entities, router): Pizza => {
        // if router.state exists, it will go and grab the correct entity
        return router.state && entities[router.state.params.pizzaId];
    }
);