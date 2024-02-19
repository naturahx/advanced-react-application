import styles from './Navigation.module.css'
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
<nav className={styles.navigation}>
    <h3>GITHUB SEACRCH</h3>

    <span>
      <Link to='/'>Home</Link>
      <Link to='/favourites'>Fav</Link>
    </span>
</nav>
  )
}

export default Navigation