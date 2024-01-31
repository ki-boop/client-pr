import { RootState } from '../store';
import { IFindPizzaPrice, IPizzaView } from './types';


export const selectPizzaViews = (state: RootState): IPizzaView[] => state.pizza.pizzaViews;
export const selectPizzaViewsByFilters = (state: RootState): IPizzaView[] => state.pizza.pizzaViewsByFilters;
export const selectPizzaStatus = (state: RootState) => state.pizza.status;
export const selectPizzaErrorMessage = (state: RootState) => state.pizza.errorMessage;

export const selectPizzaItem = (data: IFindPizzaPrice) =>
	(state: RootState) =>
		state.pizza.items.find(item =>
			item.title === data.title &&
			item.size === data.size &&
			item.type === data.type
		);

export const selectPizzaItemById = (id: number) =>
	(state: RootState) =>
		state.pizza.items.find(item => item.id === id);