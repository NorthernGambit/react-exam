import { useMemo, useState } from "react";
import { useEventsStore } from "../stores/useEventsStore";

export const useFilterEvents = () => {
	const [userInput, setUserInput] = useState("");
	const events = useEventsStore((state) => state.events);

	const filteredEvents = useMemo(() => {
		const userInputExists = userInput.trim().toLowerCase();

		if (userInputExists.length === 0) {
			return null;
		}

		return events.filter((event) =>
			event.name.toLowerCase().includes(userInputExists),
		);
	}, [userInput, events]);

	return { setUserInput, userInput, filteredEvents };
};
