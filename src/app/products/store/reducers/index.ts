import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

// have one particular file that contains all of the reducers for this module

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

// register the reducers
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

// pizzas state
export const getPizzaState = createSelector(
    getProductsState, 
    (state: ProductsState) => state.pizzas
);

export const getAllPizzasEntities = createSelector(getPizzaState,fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getAllPizzasEntities, entities => {
    return Object.keys(entities).map( id => entities[id]);
})
export const getPizzasLoaded = createSelector(getPizzaState,fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState,fromPizzas.getPizzasLoading);

