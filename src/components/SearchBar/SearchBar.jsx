import styles from "./searchBar.module.css";

const SearchBar = () => {
	return (
		<form className={styles.form}>
			<input type="text" className={styles.input} />
		</form>
	);
};

export default SearchBar;
