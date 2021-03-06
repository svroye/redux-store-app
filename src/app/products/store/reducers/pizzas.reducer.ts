import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from '../actions/pizzas.action';

// defines a slice of state that our reducer will manage 
// in our entire state tree
export interface PizzaState {
    entities: { [id: number]: Pizza}
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    loaded: false,
    loading: false,
    entities: {}
};


export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return { ...state, loading: true };
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            // {...state.entities} is the initial value
            const entities = pizzas.reduce( (entities: { [id: number]: Pizza}, pizza: Pizza) => {
                    return {...entities, [pizza.id]: pizza };
                }, 
                {...state.entities}
            );

            return { ...state, loading: false, loaded: true, entities };
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }
    return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;