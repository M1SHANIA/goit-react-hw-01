import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./components/FriendList/friendsData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
