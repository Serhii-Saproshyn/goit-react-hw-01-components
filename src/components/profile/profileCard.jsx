import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileItem,
  Avatar,
  UserName,
  Info,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/profile/Profile.styled';

export const ProfileCard = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <ProfileItem>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Info>@{tag}</Info>
        <Info>{location}</Info>

        <Stats>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </StatsItem>
        </Stats>
      </ProfileItem>
    </ProfileContainer>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
