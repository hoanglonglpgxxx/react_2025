import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-blue-500 p-4 uppercase sm:px-6">
      <Link to="/" className="tracking-[5px]">
        React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
