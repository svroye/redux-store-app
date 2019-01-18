import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';

// have one particular file that contains all of the reducers for this module

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

// register the reducers
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

