import { dayConv, monthConv, timeElementConv } from "../../utils/utils";
import styles from "./ticketCard.module.css";
import Barcode from "react-barcode";

const TicketCard = ({ ticket }) => {
	return (
		<article className={styles.card}>
			<header className={styles.header}>
				<span className={styles.sectionName}>WHAT</span>
				<h2 className={styles.title}>{ticket.name}</h2>
			</header>
			<section className={styles.whereSection}>
				<h3 className={styles.sectionName}>WHERE</h3>
				<span className={styles.whereText}>{ticket.where}</span>
			</section>
			<section className={styles.whenSection}>
				<div className={styles.whenBox}>
					<h3 className={styles.sectionName}>WHEN</h3>
					<time
						className={styles.whenText}
						dateTime={timeElementConv(ticket.when.date)}
					>
						{`${dayConv(ticket.when.date)} ${monthConv(ticket.when.date, true)}`}
					</time>
				</div>
				<div className={styles.whenBox}>
					<h3 className={styles.sectionName}>FROM</h3>
					<span className={styles.whenText}>{ticket.when.from}</span>
				</div>
				<div className={styles.whenBox}>
					<h3 className={styles.sectionName}>TO</h3>
					<span className={styles.whenText}>{ticket.when.to}</span>
				</div>
			</section>
			<section className={styles.infoSection}>
				<h3 className={styles.sectionName}>INFO</h3>
				<span
					className={styles.infoText}
				>{`Section ${ticket.section} - seat ${ticket.seat}`}</span>
			</section>
			<footer className={styles.footer}>
				<Barcode
					className={styles.barcode}
					value={`#${ticket.id}`}
					background="transparent"
					font="Fira Sans"
					fontSize={12}
					margin={0}
					height={80}
					width={2}
				/>
			</footer>
		</article>
	);
};

export default TicketCard;
