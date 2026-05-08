export const alternatingSidesVariants = {
	parent: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.13 },
		},
	},

	childOdd: {
		hidden: { opacity: 0, x: "-100%", scale: 0.6, filter: "blur(8px)" },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			filter: "blur(0px)",
			transition: { duration: 0.6, type: "spring", bounce: 0.25 },
		},
		exit: {
			opacity: 0,
			x: "-50%",
			transition: {
				duration: 0.2,
				ease: "backIn",
			},
		},
	},

	childEven: {
		hidden: { opacity: 0, x: "100%", scale: 0.6, filter: "blur(8px)" },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			filter: "blur(0px)",
			transition: { duration: 0.6, type: "spring", bounce: 0.25 },
		},
		exit: {
			opacity: 0,
			x: "50%",
			transition: {
				duration: 0.2,
				ease: "backIn",
			},
		},
	},
};
