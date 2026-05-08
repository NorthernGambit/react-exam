import { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, stagger } from "motion/react";
import { hamburgerMenuVariants } from "../../animations/hamburgerMenu.animation";

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(false);
	};
	const navLinks = [
		{ to: "/events", text: "Events" },
		{ to: "/order", text: "Order" },
		{ to: "/tickets", text: "Tickets" },
	];

	return (
		<>
			<motion.button
				className={styles.btn}
				variants={hamburgerMenuVariants.btn}
				initial="hidden"
				animate={isOpen ? "visible" : "hidden"}
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Open Menu"
			>
				<span
					style={{
						fontSize: "2rem",
						fontWeight: "600",
						color: "var(--white)",
						filter: "drop-shadow(1px 1px 0px var(--pink)",
					}}
					className={"material-symbols-outlined"}
				>
					{isOpen ? "close" : "menu"}
				</span>
			</motion.button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="blurOverlay"
						variants={hamburgerMenuVariants.blurOverlay}
						initial="hidden"
						animate="visible"
						exit="hidden"
						className={styles.blurOverlay}
						onClick={() => setIsOpen(false)}
					></motion.div>
				)}
				<motion.nav
					key="nav"
					variants={hamburgerMenuVariants.nav}
					initial="hidden"
					animate={isOpen ? "visible" : "hidden"}
					className={styles.nav}
				>
					{isOpen && (
						<motion.ul
							key="ul"
							className={styles.list}
							initial="hidden"
							animate="visible"
							variants={hamburgerMenuVariants.list}
						>
							{navLinks.map((link) => {
								return (
									<motion.li
										key={link.to}
										className={styles.listItem}
										variants={
											hamburgerMenuVariants.listItem
										}
									>
										<Link
											to={link.to}
											onClick={handleClick}
										>
											{link.text}
										</Link>
									</motion.li>
								);
							})}
						</motion.ul>
					)}
				</motion.nav>
			</AnimatePresence>
		</>
	);
};

export default HamburgerMenu;
