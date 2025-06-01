function CartOverview() {
  return (
    <div className="bg-stone-700 px-4 py-4 text-stone-200 uppercase sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="/cart">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
