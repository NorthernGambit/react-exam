import { useEffect } from "react";
import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const loadEvents = useEventsStore((state) => state.loadEvents);

	useEffect(() => {
		loadEvents();
	}, [loadEvents]);

	return (
		<div className={styles.app}>
			<Outlet />
		</div>
	);
};

export default Layout;
