import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
    // required property from ngrx/router-store
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>("routerReducer");


export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {

    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;

        // this returned objected will be bound to the state tree
        return { url, queryParams, params };
    }
}