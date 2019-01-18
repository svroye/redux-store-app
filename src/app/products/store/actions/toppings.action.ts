import { Action } from "@ngrx/store";
import { Topping } from "../../models/topping.model";


export const LOAD_TOPPINGS = "[Products] Load toppings";
export const LOAD_TOPPINGS_SUCCESS = "[Products] Load toppings success";
export const LOAD_TOPPINGS_FAIL = "[Products] Load toppings fail";


export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
} 

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]){}
}

export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any){}
}


export type ToppingsAction = LoadToppings | LoadToppingsSuccess | LoadToppingsFail;