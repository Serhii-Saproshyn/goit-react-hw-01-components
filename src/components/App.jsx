import userData from 'data/user.json';
import userStatistics from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';
import { ProfileCard } from './profile/ProfileCard';
import { Statistics } from './statistics/Statisticse';
import { FriendsMarkup } from './FriendList/FriendList';
import { TransactionsMarkup } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#2eddc0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ProfileCard
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics stats={userStatistics} />
      <FriendsMarkup friends={friendsData} />
      <TransactionsMarkup items={transactionsData} />
    </div>
  );
};
