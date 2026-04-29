import { h2, main } from "motion/react-client";
import styles from "./orderPage.module.css";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "../../components/CartList/CartList";

const OrderPage = () => {
	const cart = useCartStore((state) => state.cart);

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Order</h1>
			{cart.length < 1 ? (
				<h2>Inget i din kundvagn!</h2>
			) : (
				<>
					<CartList />
					<h3 className={styles.orderPrice}>Total värde på order</h3>
					<span>
						{cart.reduce((total, current) => {
							return total + current.count * current.price;
						}, 0)}
					</span>
				</>
			)}
		</main>
	);
};

export default OrderPage;
