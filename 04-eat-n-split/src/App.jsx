import PropTypes from "prop-types";
import "./App.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((selected) => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(val) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + val }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        ></FriendsList>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button showAddFriend={showAddFriend} onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add friend" : "Hide"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  onSelectFriend: PropTypes.func.isRequired,
  selectedFriend: PropTypes.array.isRequired,
};

function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isActive = selectedFriend?.id === friend.id;

  return (
    <li className={isActive ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectFriend(friend)}>
        {isActive ? "Close" : "Select"}
      </Button>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
  onSelectFriend: PropTypes.func.isRequired,
  selectedFriend: PropTypes.array.isRequired,
};

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👩🏼‍🤝‍🧑🏾Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>🌴Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
};

function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [paidObj, setPaidObj] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(paidObj === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>💰 Ur expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>💰 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💰 Who is paying the bill</label>
      <select value={paidObj} onChange={(e) => setPaidObj(e.target.value)}>
        <option value="user">You</option>
        <option value="friend"> {selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.func.isRequired,
  onSplitBill: PropTypes.func.isRequired,
};
