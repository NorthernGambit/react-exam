import styles from "./searchBar.module.css";

const SearchBar = ({ setUserInput }) => {
	return (
		<form role="search" className={styles.form}>
			<input
				aria-label="Search"
				type="search"
				className={styles.input}
				onChange={(e) => setUserInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchBar;
