import axios from 'axios';
import { ICreatePizzaOrderRequest, IPizzaOrderResponse } from '../../store/pizzaOrder/types';
import cookies from 'js-cookie';


export const pizzaOrderAPI = {
	async create(requestData: ICreatePizzaOrderRequest): Promise<IPizzaOrderResponse> {
		const res = await axios.post(`${process.env.REACT_APP_PIZZA_SERVER_URL}/pizza-order`, requestData, {
			headers: {
				Authorization: `Bearer ${cookies.get('token')}`
			}
		});

		return res.data;
	},

	async findAll(): Promise<IPizzaOrderResponse[]> {
		const res = await axios.get(`${process.env.REACT_APP_PIZZA_SERVER_URL}/pizza-order`, {
			headers: {
				Authorization: `Bearer ${cookies.get('token')}`
			}
		});

		return res.data;
	},

	async findById(id: number): Promise<IPizzaOrderResponse> {
		const res = await axios.get(`${process.env.REACT_APP_PIZZA_SERVER_URL}/pizza-order/${id}`, {
			headers: {
				Authorization: `Bearer ${cookies.get('token')}`
			}
		});

		return res.data;
	}
};