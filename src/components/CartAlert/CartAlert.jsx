import { Link } from "react-router-dom";
import styles from "./cartAlert.module.css";
import { useCartStore } from "../../stores/useCartStore";
import { AnimatePresence, motion } from "motion/react";
import { cartAlertVariations } from "../../animations/cartAlert.animation";
import { useEffect } from "react";

const CartAlert = () => {
	const cart = useCartStore((state) => state.cart);

	if (cart.length === 0) {
		return null;
	}

	const count = cart.reduce((total, current) => total + current.count, 0);
	return (
		<Link className={styles.link} to="/order" aria-label="Go to order">
			<span className={`material-symbols-outlined ${styles.icon}`}>
				shopping_cart
			</span>
			<motion.span
				className={styles.count}
				variants={cartAlertVariations.pulse}
				animate="visible"
				key={count}
			>
				{count}
			</motion.span>
		</Link>
	);
};
export default CartAlert;
