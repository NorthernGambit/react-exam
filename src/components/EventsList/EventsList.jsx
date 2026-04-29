import { Link } from "react-router-dom";
import { useEventsStore } from "../../stores/useEventsStore";
import EventCard from "../EventCard/EventCard";
import styles from "./eventsList.module.css";
import { motion, stagger } from "motion/react";

const EventsList = () => {
	const events = useEventsStore((state) => state.events);

	const parentVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.13 },
		},
	};

	const childOddVariants = {
		hidden: { opacity: 0, x: "-100%", scale: 0.6 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { duration: 0.5, type: "spring", bounce: 0.25 },
		},
	};

	const childEvenVariants = {
		hidden: { opacity: 0, x: "100%", scale: 0.6 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { duration: 0.5, type: "spring", bounce: 0.25 },
		},
	};

	return (
		<motion.ul
			className={styles.list}
			variants={parentVariants}
			initial="hidden"
			animate="visible"
		>
			{events && events.length > 0
				? events.map((event, index) => {
						return (
							<motion.li
								variants={
									index % 2 === 1
										? childOddVariants
										: childEvenVariants
								}
								className={styles.listItem}
								key={event.id}
							>
								<Link to={`/event/${event.id}`}>
									<EventCard event={event} />
								</Link>
							</motion.li>
						);
					})
				: ""}
		</motion.ul>
	);
};

export default EventsList;
