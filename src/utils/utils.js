export const asyncTimeout = async (time = 0) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

export const timeElementConv = (date) => {
	const regex = / (.*)/;
	const stringMonth = date.match(regex)[1].toLowerCase();
	let month;

	switch (stringMonth) {
		case "januari":
			month = "01";
			break;
		case "februari":
			month = "02";
			break;
		case "mars":
			month = "03";
			break;
		case "april":
			month = "04";
			break;
		case "maj":
			month = "05";
			break;
		case "juni":
			month = "06";
			break;
		case "juli":
			month = "07";
			break;
		case "augusti":
			month = "08";
			break;
		case "september":
			month = "09";
			break;
		case "oktober":
			month = "10";
			break;
		case "november":
			month = "11";
			break;
		case "december":
			month = "12";
			break;
	}

	let day = date.slice(0, 2).trim();
	if (day.length === 1) {
		day = `0${day}`;
	}

	return `2026-${month}-${day}`;
};

export const monthConv = (date) => {
	const regex = / (.*)/;

	const month = date.match(regex)[1].toUpperCase().slice(0, 3);

	return month;
};

export const dayConv = (date) => {
	let day = date.slice(0, 2).trim();

	if (day.length === 1) {
		day = `0${day}`;
	}

	return day;
};
