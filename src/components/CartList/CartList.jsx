import styles from "./cartList.module.css";
import { useCartStore } from "../../stores/useCartStore";
import { ul } from "motion/react-client";
import ItemQuantityCard from "../ItemQuantityCard/ItemQuantityCard";

const CartList = () => {
	const cart = useCartStore((state) => state.cart);
	const addEvent = useCartStore((state) => state.addEvent);
	const subEvent = useCartStore((state) => state.subEvent);
	return (
		<ul className={styles.list}>
			{cart.map((event) => {
				return (
					<li className={styles.listItem} key={event.id}>
						<ItemQuantityCard
							count={event.count}
							textContent={event.name}
							onAddClick={() => addEvent(event)}
							onSubClick={() => subEvent(event)}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default CartList;
