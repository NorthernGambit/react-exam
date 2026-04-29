import { button } from "motion/react-client";
import styles from "./button.module.css";

const Button = ({ onClick, children }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
