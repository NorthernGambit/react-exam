import { create } from "zustand";
import { fetchEvents } from "../api/fetchEvents";

export const useEventsStore = create((set, get) => ({
	events: [],
	isLoading: false,
	isError: false,

	loadEvents: async () => {
		set({ isLoading: false, isError: false });
		try {
			set({ isLoading: true });
			const data = (await fetchEvents()).events;
			if (data && data.length > 0) {
				set({ events: data });
			} else {
				throw new Error("Event array from API is empty or invalid!");
			}
		} catch (error) {
			console.log(error.message);
			set({ isError: true, isLoading: false });
		} finally {
			set({ isLoading: false });
		}
	},
	getEvent: (id) => {
		const currentEvents = get().events;

		if (currentEvents.length < 1) {
			return null;
		}

		const eventExists = currentEvents.find((event) => event.id === id);

		return eventExists ? eventExists : null;
	},
}));
