import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <h3 className={styles.title}>Github Search</h3>
      <span>
        <Link to="/" className={styles.linkOne}>Home</Link>
        <Link to="/favourites" className={styles.linkTwo}>Favourites</Link>
      </span>
    </nav>
  );
};

export default Navigation;
