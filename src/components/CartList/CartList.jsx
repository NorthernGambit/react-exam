import styles from "./cartList.module.css";
import { useCartStore } from "../../stores/useCartStore";
import { ul } from "motion/react-client";
import ItemQuantityCard from "../ItemQuantityCard/ItemQuantityCard";
import { AnimatePresence, motion, stagger } from "motion/react";
import { alternatingSidesVariants } from "../../animations/alternatingSides.animation";

const CartList = () => {
	const cart = useCartStore((state) => state.cart);
	const addEvent = useCartStore((state) => state.addEvent);
	const subEvent = useCartStore((state) => state.subEvent);
	return (
		<motion.ul
			className={styles.list}
			variants={alternatingSidesVariants.parent}
			initial="hidden"
			animate="visible"
		>
			<AnimatePresence>
				{cart.map((event, index) => {
					return (
						<motion.li
							className={styles.listItem}
							key={event.id}
							variants={
								index % 2 === 1
									? alternatingSidesVariants.childOdd
									: alternatingSidesVariants.childEven
							}
							layout
						>
							<ItemQuantityCard
								style={"alt"}
								count={event.count}
								textContent={event.name}
								secondTextContent={`${event.when.date} kl ${event.when.from} - ${event.when.to}`}
								onAddClick={() => addEvent(event)}
								onSubClick={() => subEvent(event)}
							/>
						</motion.li>
					);
				})}
			</AnimatePresence>
		</motion.ul>
	);
};

export default CartList;
