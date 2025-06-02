import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className =
    'sm:px-6 inline-block cursor-pointer rounded-full bg-blue-400 px-4 py-3 font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-blue-300 focus:bg-blue-300 focus:ring focus:ring-blue-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-500 sm:py-4';
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
