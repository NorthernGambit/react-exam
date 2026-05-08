import styles from "./button.module.css";
import { motion } from "motion/react";
import { globalVariants } from "../../animations/global.animation";

const Button = ({ onClick, children }) => {
	return (
		<motion.button
			className={styles.button}
			onTap={onClick}
			variants={globalVariants.pulse}
			whileTap="activate"
		>
			{children}
		</motion.button>
	);
};

export default Button;
