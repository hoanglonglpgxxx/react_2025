import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">React Pizza Co.</Link>
      <SearchOrder />
      <p>asdasd</p>
    </header>
  );
}

export default Header;
