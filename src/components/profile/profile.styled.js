import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2eddc0;
`;

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  width: 320px;
  border: 2px solid #707070;
  background-color: #fdd36e;
`;
export const Avatar = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin-top: 20px;
`;
export const UserName = styled.p`
  font-size: 22px;
  color: black;
  margin-top: 20px;
  margin-bottom: 0;
`;
export const Info = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: black;
`;
export const Stats = styled.ul`
  background-color: #fff;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top: 1px solid black;
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :not(:last-child) {
    border-right: 1px solid #0f0f4f;
  }
  padding: 5px;
`;
export const StatsLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  font-weight: 16px;
  text-align: center;
`;

export const StatsQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
  margin: 10px auto;
`;
