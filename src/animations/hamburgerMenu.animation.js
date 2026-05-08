export const hamburgerMenuVariants = {
	list: {
		visible: {
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
		hidden: {
			transition: { staggerChildren: 0.05 },
		},
	},

	listItem: {
		visible: {
			x: 0,
			opacity: 1,
			filter: "blur(0px)",
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
		hidden: {
			x: -100,
			opacity: 0,
			filter: "blur(4px)",
			transition: { duration: 0.2 },
		},
	},

	blurOverlay: {
		hidden: {
			opacity: 0,
			filter: "saturate(1)",
		},
		visible: {
			opacity: 1,
			filter: "saturate(.75)",
		},
	},

	nav: {
		hidden: {
			x: -300,
			filter: "blur(4px)",
			transition: {
				duration: 0.1,
				ease: "easeInOut",
			},
		},
		visible: {
			x: 0,
			filter: "blur(0px)",
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
	},

	btn: {
		visible: {
			rotate: 360,
			transition: {
				duration: 0.8,
				type: "spring",
				bounce: 0.25,
			},
		},
		hidden: {
			rotate: 0,
			transition: {
				duration: 0.8,
				type: "spring",
				bounce: 0.25,
			},
		},
	},
};
