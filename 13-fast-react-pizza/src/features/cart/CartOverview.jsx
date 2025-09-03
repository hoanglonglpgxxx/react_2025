import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';

function CartOverview() {
  const navigate = useNavigate();
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-700 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartPrice)}</span>
      </p>

      <a
        onClick={(e) => {
          e.preventDefault();
          navigate('/cart');
        }}
        href=""
      >
        Open cart &rarr;
      </a>
    </div>
  );
}

export default CartOverview;
