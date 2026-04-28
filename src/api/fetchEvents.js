import axios from "axios";
import { asyncTimeout } from "../utils/utils";

export const fetchEvents = async () => {
	const response = await axios.get(
		"https://santosnr6.github.io/Data/events.json",
	);

	await asyncTimeout(850);

	return response.data;
};
