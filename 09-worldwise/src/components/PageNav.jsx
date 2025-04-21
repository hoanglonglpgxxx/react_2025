import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navChild}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.navChild}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className={styles.navChild}>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
