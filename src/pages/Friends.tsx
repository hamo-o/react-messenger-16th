import styled from 'styled-components';

import Navigator from '../components/Navigator';
import Header from '../components/Header';
import FriendsList from '../components/FriendsList';

const Friends = () => {
  return (
    <Container>
      <Navigator />
      <Contents>
        <Header leftChild={'친구'} rightChild={true} />
        <FriendsList />
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

const Contents = styled.div`
  width: 100%;
`;

export default Friends;
