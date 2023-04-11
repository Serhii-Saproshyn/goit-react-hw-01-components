import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { ProfileCard } from '../FriendListItem/FriendListItem';

export function FriendsMarkup({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ProfileCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendsMarkup.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
