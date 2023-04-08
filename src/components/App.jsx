import userData from 'data/user.json';
import userStatistics from 'data/data.json';
import { ProfileCard } from './profile/ProfileCard';
import { Statistics } from './statistics/Statistics';
export const App = () => {
  return (
    <div style={{ backgroundColor: '#2eddc0' }}>
      <ProfileCard
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics stats={userStatistics} />
    </div>
  );
};
