// Tip calculator
import { useState } from "react";
import PropTypes from "prop-types";

const ratingRules = [
  { title: "Dissatisfied", value: 0 },
  { title: "Not recommend", value: 5 },
  { title: "Not bad", value: 10 },
  { title: "Excellent", value: 20 },
];

export default function App() {
  const [total, setTotal] = useState(0);
  const [ratings, setRatings] = useState({ user: 0, friend: 0 });

  function handleReset() {
    setTotal(0);
    setRatings({ user: 0, friend: 0 });
  }

  return (
    <>
      <TotalBill total={total} setTotal={setTotal} />
      <ServiceRating
        rating={ratings.user}
        setRating={(value) => setRatings((prev) => ({ ...prev, user: value }))}
      />
      <FriendsRating
        friendRating={ratings.friend}
        setFriendRating={(value) => setRatings((prev) => ({ ...prev, friend: value }))}
      />
      <Result total={total} ratings={ratings} onReset={handleReset} />
    </>
  );
}

function TotalBill({ total, setTotal }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="number"
        value={total}
        onChange={(e) => setTotal(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}

TotalBill.propTypes = {
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};

function ServiceRating({ rating, setRating }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
        {ratingRules.map((el, i) => (
          <option value={el.value} key={i}>
            {el.title} {el.value}%
          </option>
        ))}
      </select>
    </div>
  );
}

ServiceRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

function FriendsRating({ friendRating, setFriendRating }) {
  return (
    <div>
      <span>How did your friend like the service?</span>
      <select
        value={friendRating}
        onChange={(e) => setFriendRating(parseInt(e.target.value))}
      >
        {ratingRules.map((el, i) => (
          <option value={el.value} key={i}>
            {el.title} {el.value}%
          </option>
        ))}
      </select>
    </div>
  );
}

FriendsRating.propTypes = {
  friendRating: PropTypes.number.isRequired,
  setFriendRating: PropTypes.func.isRequired,
};

function Result({ total, ratings, onReset }) {
  const tipAmount = (ratings.user + ratings.friend) / 2;
  const totalAmount = total + tipAmount;

  return (
    <>
      <div>{`You paid $${totalAmount.toFixed(2)} ($${total.toFixed(
        2
      )} + $${tipAmount.toFixed(2)} tip)`}</div>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

Result.propTypes = {
  total: PropTypes.number.isRequired,
  ratings: PropTypes.shape({
    user: PropTypes.number.isRequired,
    friend: PropTypes.number.isRequired,
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};
