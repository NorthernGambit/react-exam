import { Navigate, useNavigate, useParams } from "react-router-dom";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./eventDetailPage.module.css";
import { useEffect, useState } from "react";
import ItemQuantityCard from "../../components/ItemQuantityCard/ItemQuantityCard";
import Button from "../../components/Button/Button";
import { useCartStore } from "../../stores/useCartStore";
import { timeElementConv } from "../../utils/utils";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import { motion } from "motion/react";
import { globalVariants } from "../../animations/global.animation";
import toast from "react-hot-toast";

const EventDetailPage = () => {
	const isLoading = useEventsStore((state) => state.isLoading);
	const isError = useEventsStore((state) => state.isError);
	const events = useEventsStore((state) => state.events);
	const getEvent = useEventsStore((state) => state.getEvent);
	const addEvent = useCartStore((state) => state.addEvent);
	const navigate = useNavigate();

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
		toast.success(
			`${count}x ${event.name} biljetter har lagts i kundvagnen!`,
			{ duration: 2000, position: "bottom-center" },
		);
		navigate("/events");
	};

	return (
		<main className={styles.main}>
			<motion.h1
				className={styles.title}
				variants={globalVariants.popIn}
				initial="hidden"
				animate="visible"
			>
				Event
			</motion.h1>
			{isLoading ? (
				<LoadingCircle msg="Loading..." />
			) : isError ? (
				<AlertMessage msg="Error, something went wrong!" />
			) : event ? (
				<>
					<motion.p
						className={styles.titleSub}
						variants={globalVariants.popIn}
						initial="hidden"
						animate="visible"
						custom=".2"
					>
						You're about to score <br /> some tickets to
					</motion.p>
					<motion.section
						className={styles.infoSection}
						variants={globalVariants.popIn}
						initial="hidden"
						animate="visible"
						custom=".4"
					>
						<h2 className={styles.eventTitle}>{event.name}</h2>
						<time
							className={styles.when}
							dateTime={timeElementConv(event.when.date)}
						>
							{event.when.date} kl {event.when.from} -{" "}
							{event.when.to}
						</time>
						<p className={styles.where}>@ {event.where}</p>
					</motion.section>
					<ItemQuantityCard
						onAddClick={handleAddCount}
						onSubClick={handleSubCount}
						textContent={`${totalPrice} sek`}
						count={count}
					/>
					<Button onClick={handleAddToCart}>Lägg i varukorgen</Button>
				</>
			) : (
				<AlertMessage msg="Event not found!" />
			)}
		</main>
	);
};

export default EventDetailPage;
