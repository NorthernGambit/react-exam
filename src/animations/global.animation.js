export const globalVariants = {
	pulse: {
		activate: {
			scale: 0.4,
			y: 4,
			transition: {
				duration: 0.02,
				type: "spring",
				stiffness: 200,
				damping: 10,
			},
		},
	},
	popIn: {
		hidden: {
			opacity: 0,
			scale: 0.3,
			y: 16,
		},
		visible: (custom) => ({
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.125,
				type: "spring",
				stiffness: 200,
				damping: 15,
				delay: custom || 0,
			},
		}),
	},
};
