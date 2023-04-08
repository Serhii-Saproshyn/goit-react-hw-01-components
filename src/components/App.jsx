import userData from 'data/user.json';
import userStatistics from 'data/data.json';
import friendsData from 'data/friends.json';
import { ProfileCard } from './profile/ProfileCard';
import { Statistics } from './statistics/Statistics';
import { FriendsMarkup } from './FriendList/FriendList';
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
    </div>
  );
};
