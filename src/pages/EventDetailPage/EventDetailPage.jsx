import { useParams } from "react-router-dom";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./eventDetailPage.module.css";
import { useEffect, useState } from "react";
import ItemQuantityCard from "../../components/ItemQuantityCard/ItemQuantityCard";
import Button from "../../components/Button/Button";
import { useCartStore } from "../../stores/useCartStore";

const EventDetailPage = () => {
	const isLoading = useEventsStore((state) => state.isLoading);
	const isError = useEventsStore((state) => state.isError);
	const events = useEventsStore((state) => state.events);
	const getEvent = useEventsStore((state) => state.getEvent);
	const addEvent = useCartStore((state) => state.addEvent);

	const { id } = useParams();
	const event = getEvent(id);

	const [count, setCount] = useState(1);
	const totalPrice = event ? count * event.price : 0;

	const handleAddCount = () => {
		setCount((prev) => prev + 1);
	};

	const handleSubCount = () => {
		count <= 2 ? setCount(1) : setCount((prev) => prev - 1);
	};

	const handleAddToCart = () => {
		addEvent(event, count);
	};

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Event</h1>
			{isLoading ? (
				<LoadingCircle />
			) : isError ? (
				<h2>Error!</h2>
			) : event ? (
				<>
					<p className={styles.titleSub}>
						You're about to score <br /> some tickets to
					</p>
					<section className={styles.infoSection}>
						<h2 className={styles.eventTitle}>{event.name}</h2>
						<h3 className={styles.when}>
							{event.when.date} kl {event.when.from} -{" "}
							{event.when.to}
						</h3>
						<p className={styles.where}>@ {event.where}</p>
					</section>
					<ItemQuantityCard
						onAddClick={handleAddCount}
						onSubClick={handleSubCount}
						textContent={`${totalPrice} sek`}
						count={count}
					/>
					<Button onClick={handleAddToCart}>Lägg i varukorgen</Button>
				</>
			) : (
				<h2>Event not found!</h2>
			)}
		</main>
	);
};

export default EventDetailPage;
