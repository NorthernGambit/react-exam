import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import TicketsPage from "./pages/TicketsPage/TicketsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "events",
				element: <EventsPage />,
			},
			{
				path: "event/:id?",
				element: <EventDetailPage />,
			},
			{
				path: "order",
				element: <OrderPage />,
			},
			{
				path: "tickets",
				element: <TicketsPage />,
			},
		],
	},
]);
