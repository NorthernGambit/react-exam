import styles from "./alertMessage.module.css";

const AlertMessage = ({ msg }) => {
	return <h2 className={styles.alert}>{msg}</h2>;
};

export default AlertMessage;
