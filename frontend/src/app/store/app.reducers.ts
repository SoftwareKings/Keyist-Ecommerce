import {ActionReducerMap} from '@ngrx/store';
import * as fromCart from '../store/cart/cart.reducer';
import * as fromOrder from '../store/order/order.reducer';
import * as fromAuth from '../store/auth/auth.reducer';
import * as fromShowcase from '../store/showcase/showcase.reducer';
import * as fromBrowse from '../store/browse/browse.reducer';
import {HttpErrorResponse} from "@angular/common/http";

export interface HttpError {
  error: HttpErrorResponse,
  errorEffect: string
}

export interface AppState {
  cart: fromCart.State,
  order: fromOrder.State,
  auth: fromAuth.State,
  showcase: fromShowcase.State,
  browse: fromBrowse.State
}

export const reducers: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
  order: fromOrder.orderReducer,
  auth: fromAuth.authReducer,
  showcase: fromShowcase.showcaseReducer,
  browse: fromBrowse.browseReducer
};
