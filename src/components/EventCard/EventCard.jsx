import { monthConv, dayConv, timeElementConv } from "../../utils/utils";
import styles from "./eventCard.module.css";

const EventCard = ({ event }) => {
	console.log(event);
	return (
		<article className={styles.card}>
			<time
				className={styles.timeContainer}
				dateTime={timeElementConv(event.when.date)}
			>
				<p className={styles.day}>{dayConv(event.when.date)}</p>
				<p className={styles.month}>{monthConv(event.when.date)}</p>
			</time>
			<div className={styles.infoGroup}>
				<h2 className={styles.title}>{event.name}</h2>
				<p className={styles.location}>{event.where}</p>
				<div className={styles.metaGroup}>
					<p className={styles.duration}>
						{event.when.from} - {event.when.to}
					</p>
					<p className={styles.price}>{event.price} sek</p>
				</div>
			</div>
		</article>
	);
};

export default EventCard;
