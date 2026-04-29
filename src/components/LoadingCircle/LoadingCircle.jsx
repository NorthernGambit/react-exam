import { motion } from "motion/react";
import image from "../../assets/loadingCircle.apng";
import styles from "./loadingCircle.module.css";

const LoadingCircle = () => {
	return (
		<motion.figure
			initial={{ opacity: 0, y: 250 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
			className={styles.figure}
		>
			<img className={styles.image} src={image} alt="Loading..." />
			<motion.figcaption
				animate={{
					scale: [1, 1.15, 1],
					transition: {
						duration: 1,
						repeat: Infinity,
						ease: "easeInOut",
					},
				}}
				className={styles.figCaption}
			>
				Loading
			</motion.figcaption>
		</motion.figure>
	);
};
motion;
export default LoadingCircle;
