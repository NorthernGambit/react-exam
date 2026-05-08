import { useEffect } from "react";
import { useEventsStore } from "../../stores/useEventsStore";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import CartAlert from "../CartAlert/CartAlert";
import { Toaster } from "react-hot-toast";

const Layout = () => {
	const loadEvents = useEventsStore((state) => state.loadEvents);

	useEffect(() => {
		loadEvents();
	}, [loadEvents]);

	return (
		<div className={styles.app}>
			<Toaster />
			<HamburgerMenu />
			<CartAlert />
			<Outlet />
		</div>
	);
};

export default Layout;
