import styles from "./itemQuantityCard.module.css";

const ItemQuantityCard = ({ onAddClick, onSubClick, count, textContent }) => {
	return (
		<div className={styles.container}>
			<p className={styles.textContent}>{textContent}</p>
			<div className={styles.counterGroup}>
				<button onClick={onSubClick} className={styles.button}>
					-
				</button>
				<span className={styles.count}>{count}</span>
				<button onClick={onAddClick} className={styles.button}>
					+
				</button>
			</div>
		</div>
	);
};

export default ItemQuantityCard;
