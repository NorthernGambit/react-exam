import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./landingPage.module.css";
import landingPageImg from "../../assets/Group.svg";

const LandingPage = () => {
	const events = useEventsStore((state) => state.events);
	const isLoading = useEventsStore((state) => state.isLoading);
	const isError = useEventsStore((state) => state.isError);

	return (
		<main className={styles.main}>
			<img className={styles.image} src={landingPageImg} alt="logo" />
			<h1 className={styles.title}>Where It's @</h1>
			<p className={styles.text}>Ticketing made easy</p>
		</main>
	);
};

export default LandingPage;
