import styles from "./itemQuantityCard.module.css";
import { globalVariants } from "../../animations/global.animation";
import { motion } from "motion/react";

const ItemQuantityCard = ({
	onAddClick,
	onSubClick,
	count,
	textContent,
	secondTextContent,
	style = "default",
}) => {
	return (
		<div className={styles.container}>
			{style === "default" ? (
				<p className={styles.textContent}>{textContent}</p>
			) : (
				<h2 className={styles.altTextContent}>
					{textContent}
					<br />
					<span className={styles.altTextContentSub}>
						{secondTextContent}
					</span>
				</h2>
			)}
			<div className={styles.counterGroup}>
				<motion.button
					aria-label="Subtract"
					onClick={onSubClick}
					className={styles.button}
					variants={globalVariants.pulse}
					whileTap="activate"
				>
					-
				</motion.button>
				<span className={styles.count} aria-label="Item count">
					{count}
				</span>
				<motion.button
					aria-label="Add"
					onClick={onAddClick}
					className={styles.button}
					variants={globalVariants.pulse}
					whileTap="Activate"
				>
					+
				</motion.button>
			</div>
		</div>
	);
};

export default ItemQuantityCard;
