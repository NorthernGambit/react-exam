import styles from "./orderPage.module.css";
import { useCartStore } from "../../stores/useCartStore";
import CartList from "../../components/CartList/CartList";
import Button from "../../components/Button/Button";
import { useTickets } from "../../hooks/useTickets";
import { Link, useNavigate } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import { asyncTimeout } from "../../utils/utils";
import { useState } from "react";
import SimulateCartProcessing from "../../components/SimulateCartProcessing/SimulateCartProcessing";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { globalVariants } from "../../animations/global.animation";

const OrderPage = () => {
	const cart = useCartStore((state) => state.cart);
	const emptyCart = useCartStore((state) => state.emptyCart);
	const { addTickets } = useTickets();
	const navigate = useNavigate();
	const [isProcessing, setIsProcessing] = useState(false);

	const handleClick = async () => {
		setIsProcessing(true);
		await asyncTimeout(1800);
		toast.success("Köp slutfört!", { position: "top-right" });
		await asyncTimeout(200);
		setIsProcessing(false);
		addTickets(cart);
		emptyCart();
		navigate("/tickets");
	};
	return (
		<main className={styles.main}>
			{isProcessing && <SimulateCartProcessing />}
			<motion.h1
				className={styles.title}
				variants={globalVariants.popIn}
				initial="hidden"
				animate="visible"
			>
				Order
			</motion.h1>
			{cart.length < 1 ? (
				<>
					<AlertMessage msg="Här var det tomt!" />
					<Link to="/events">
						<Button>Gå till events!</Button>
					</Link>
				</>
			) : (
				<>
					<CartList />
					<div className={styles.bottomGroup}>
						<h3 className={styles.priceText}>
							Total värde på order
						</h3>
						<span className={styles.price}>
							{cart.reduce((total, current) => {
								return total + current.count * current.price;
							}, 0)}{" "}
							sek
						</span>
						<Button onClick={handleClick}>Skicka order</Button>
					</div>
				</>
			)}
		</main>
	);
};

export default OrderPage;
