export const landingPageVariations = {
	image: {
		hidden: {
			scale: 0.25,
			y: 100,
		},
		visible: {
			scale: 1,
			y: 0,
		},
	},
	header: {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		visible: {
			scale: [1, 1.25, 1],
			opacity: 1,
			transition: {
				delay: 0.7,
				duration: 0.7,
				ease: "easeInOut",
			},
		},
	},
	text: {
		hidden: {
			scale: 0,
			opacity: 0,
			x: -150,
		},
		visible: {
			scale: 1,
			opacity: 1,
			x: 0,
			transition: {
				delay: 1.8,
			},
		},
	},
};
