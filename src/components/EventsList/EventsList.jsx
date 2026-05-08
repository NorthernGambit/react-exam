import { Link } from "react-router-dom";
import EventCard from "../EventCard/EventCard";
import styles from "./eventsList.module.css";
import { AnimatePresence, motion } from "motion/react";
import { alternatingSidesVariants } from "../../animations/alternatingSides.animation";

const EventsList = ({ events }) => {
	return (
		<AnimatePresence>
			<motion.ul
				className={styles.list}
				variants={alternatingSidesVariants.parent}
				initial="hidden"
				animate="visible"
			>
				{events.map((event, index) => {
					return (
						<motion.li
							variants={
								index % 2 === 1
									? alternatingSidesVariants.childOdd
									: alternatingSidesVariants.childEven
							}
							layout
							className={styles.listItem}
							key={event.id}
						>
							<Link to={`/event/${event.id}`}>
								<EventCard event={event} />
							</Link>
						</motion.li>
					);
				})}
			</motion.ul>
		</AnimatePresence>
	);
};

export default EventsList;
