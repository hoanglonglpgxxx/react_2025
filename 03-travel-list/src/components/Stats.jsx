import PropTypes from "prop-types";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to ur packing list</em>
      </p>
    );
  //Derived state
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.packed).length;
  const percentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

  return (
    <footer className="stats">
      <em>
        {percentage < 100
          ? `🧰You have ${totalItems} items on your list, and you already packed ${checkedItems}
          (${percentage} %)`
          : "You got everything! Ready to go ✈"}
      </em>
    </footer>
  );
}
Stats.propTypes = {
  items: PropTypes.object.isRequired,
};
