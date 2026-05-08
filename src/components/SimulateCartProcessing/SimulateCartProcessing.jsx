import LoadingCircle from "../LoadingCircle/LoadingCircle";
import styles from "./simulateCartProcessing.module.css";

const SimulateCartProcessing = () => {
	return (
		<div className={styles.blurOverlay}>
			<LoadingCircle msg="Slutför köp..." />
		</div>
	);
};

export default SimulateCartProcessing;
