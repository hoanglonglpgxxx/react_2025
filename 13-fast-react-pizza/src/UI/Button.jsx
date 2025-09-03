import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick, className = '' }) {
  const base =
    'inline-block text-sm cursor-pointer rounded-full bg-blue-400 font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-blue-300 focus:bg-blue-300 focus:ring focus:ring-blue-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-500 px-4 ';
  const styles = {
    primary: base + 'py-3 md:px-6 md:py-4',
    small: base + 'py-2 md:px-5 md:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm cursor-pointer rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-200 hover:bg-stone-300 hover:text-stone-800  focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-500 px-4 py-2.5 md:px-6 md:py-3.5',
  };
  if (to)
    return (
      <Link to={to} className={`${styles[type]} ${className}`}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles[type]} ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={`${styles[type]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
