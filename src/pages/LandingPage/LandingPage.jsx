import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./landingPage.module.css";
import landingPageImg from "../../assets/Group.svg";
import { motion } from "motion/react";
import { landingPageVariations } from "../../animations/landingPage.animation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("/events");
		}, 3500);
		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<main className={styles.main}>
			<motion.img
				className={styles.image}
				src={landingPageImg}
				alt="logo"
				variants={landingPageVariations.image}
				initial="hidden"
				animate="visible"
			/>
			<motion.h1
				className={styles.title}
				variants={landingPageVariations.header}
				initial="hidden"
				animate="visible"
			>
				Where It's @
			</motion.h1>
			<motion.p
				className={styles.text}
				variants={landingPageVariations.text}
				initial="hidden"
				animate="visible"
			>
				Ticketing made easy
			</motion.p>
		</main>
	);
};

export default LandingPage;
