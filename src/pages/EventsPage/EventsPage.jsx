import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./eventsPage.module.css";
import loadingImg from "../../assets/loadingCircle.apng";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import SearchBar from "../../components/SearchBar/SearchBar";
import EventsList from "../../components/EventsList/EventsList";

const EventsPage = () => {
	const isLoading = useEventsStore((state) => state.isLoading);
	const isError = useEventsStore((state) => state.isError);

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Events</h1>
			<SearchBar />
			{isLoading ? (
				<LoadingCircle />
			) : isError ? (
				<h2>Error!</h2>
			) : (
				<EventsList />
			)}
		</main>
	);
};

export default EventsPage;
