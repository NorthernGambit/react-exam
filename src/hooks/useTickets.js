import { useState } from "react";
import { idGenerator } from "../utils/utils";

export const useTickets = () => {
	const [tickets, setTickets] = useState(() => getLs());

	const addTickets = (cart) => {
		const eventSections = "ABCDEFGH";
		const eventSeats = 250;
		let newTicketArray = [];

		for (let event of cart) {
			const seats = event.count;
			const section =
				eventSections[Math.floor(Math.random() * eventSections.length)];
			const startingSeat = Math.floor(
				Math.random() * (eventSeats - seats + 1) + 1,
			);

			for (let i = 0; i < seats; i++) {
				const newTicket = {
					...event,
					id: idGenerator(5),
					section: section,
					seat: startingSeat + i,
				};
				delete newTicket.count;
				newTicketArray = [...newTicketArray, newTicket];
			}
		}
		saveLs(newTicketArray);
		setTickets(getLs());
	};

	return { tickets, addTickets };
};

function saveLs(ticketArray) {
	const tickets = getLs();
	const newTickets = [...tickets, ...ticketArray];
	localStorage.setItem("tickets", JSON.stringify(newTickets));
}

function getLs() {
	return JSON.parse(localStorage.getItem("tickets")) || [];
}
