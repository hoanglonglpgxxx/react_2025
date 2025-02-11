import PropTypes from "prop-types";
import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  setItems,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [];
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  function handleClearList() {
    const confirmed = window.confirm("Are u sure u want to delete all items?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by desciption</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button className="clearList" onClick={handleClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
PackingList.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
};
