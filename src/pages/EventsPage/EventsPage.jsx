import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./eventsPage.module.css";
import loadingImg from "../../assets/loadingCircle.apng";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import SearchBar from "../../components/SearchBar/SearchBar";
import EventsList from "../../components/EventsList/EventsList";
import { useFilterEvents } from "../../hooks/useFilterEvents";
import { motion } from "motion/react";
import { globalVariants } from "../../animations/global.animation";
import AlertMessage from "../../components/AlertMessage/AlertMessage";

const EventsPage = () => {
	const isLoading = useEventsStore((state) => state.isLoading);
	const isError = useEventsStore((state) => state.isError);
	const events = useEventsStore((state) => state.events);
	const { setUserInput, filteredEvents } = useFilterEvents();
	const eventsToDisplay = filteredEvents || events;

	return (
		<main className={styles.main}>
			<motion.h1
				className={styles.title}
				variants={globalVariants.popIn}
				initial="hidden"
				animate="visible"
			>
				Events
			</motion.h1>
			<SearchBar setUserInput={setUserInput} />
			{isLoading ? (
				<LoadingCircle msg="Loading..." />
			) : isError ? (
				<AlertMessage msg="Error!" />
			) : (
				<EventsList events={eventsToDisplay} />
			)}
		</main>
	);
};

export default EventsPage;
