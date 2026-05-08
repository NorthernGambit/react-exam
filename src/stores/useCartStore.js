import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create()(
	persist(
		(set) => ({
			cart: [],

			emptyCart: () => set({ cart: [] }),

			addEvent: (event, count = 1) =>
				set((state) => {
					let newCart;

					const eventExists = state.cart.find(
						(item) => item.id === event.id,
					);

					if (eventExists) {
						newCart = state.cart.map((item) =>
							item.id === event.id
								? { ...item, count: item.count + count }
								: item,
						);
					} else {
						newCart = [...state.cart, { ...event, count: count }];
					}

					return { cart: newCart };
				}),

			subEvent: (event) =>
				set((state) => {
					let newCart;

					const eventExists = state.cart.find(
						(item) => item.id === event.id,
					);

					if (eventExists) {
						if (eventExists.count >= 2) {
							newCart = state.cart.map((item) =>
								item.id === event.id
									? {
											...item,
											count: item.count - 1,
										}
									: item,
							);
						} else {
							newCart = state.cart.filter(
								(item) => item.id !== event.id,
							);
						}
						return { cart: newCart };
					}
					return state;
				}),
		}),
		{
			name: "cart",
		},
	),
);
