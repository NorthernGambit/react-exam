export const ticketsVariants = {
	slideUp: {
		hidden: {
			scale: 0.75,
			y: 300,
			opacity: 0,
			filter: "blur(8px)",
		},
		visible: {
			scale: 1,
			y: 0,
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				duration: 1.25,
				type: "spring",
				stiffness: 75,
				damping: 15,
				mass: 1.9,
			},
		},
	},
};
