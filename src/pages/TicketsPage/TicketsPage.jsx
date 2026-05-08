import TicketCard from "../../components/TicketCard/TicketCard";
import { useTickets } from "../../hooks/useTickets";
import styles from "./ticketsPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { motion } from "motion/react";
import { globalVariants } from "../../animations/global.animation";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ticketsVariants } from "../../animations/tickets.animation";

const TicketsPage = () => {
	const { tickets } = useTickets();
	return (
		<main className={styles.main}>
			<motion.h1
				className={styles.title}
				variants={globalVariants.popIn}
				initial="hidden"
				animate="visible"
			>
				Tickets
			</motion.h1>
			{tickets.length < 1 ? (
				<>
					<AlertMessage msg="Här var det tomt!" />
					<Link to="/events">
						<Button>Gå till events!</Button>
					</Link>
				</>
			) : (
				<motion.div
					variants={ticketsVariants.slideUp}
					initial="hidden"
					animate="visible"
				>
					<Swiper
						effect={"cards"}
						modules={[EffectCards]}
						grabCursor={true}
						className={styles.ticketSwiper}
					>
						{tickets.map((ticket) => {
							return (
								<SwiperSlide
									key={ticket.id}
									className={styles.slide}
								>
									<TicketCard ticket={ticket} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</motion.div>
			)}
		</main>
	);
};

export default TicketsPage;
