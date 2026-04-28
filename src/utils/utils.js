export const asyncTimeout = async (time = 0) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};
