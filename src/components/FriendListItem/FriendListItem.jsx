import PropTypes from 'prop-types';
import './FriendListItem.css';
import clsx from 'clsx';

export const ProfileCard = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={clsx('status', { statusOnLine: isOnline })}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
