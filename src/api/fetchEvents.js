import axios from "axios";
import { asyncTimeout } from "../utils/utils";

export const fetchEvents = async () => {
	const response = await axios.get(
		"https://santosnr6.github.io/Data/events.json",
	);

	await asyncTimeout(1600);

	return response.data;
};
