import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';
import { chatState } from '../../recoil/recoil';

import { User } from '../../interfaces/interfaces';

const ChatRoomItem = (user: User) => {
  const id = user.user_id;

  const chats = useRecoilValue(chatState);
  const myChats = chats.filter((chat) => chat.chat_room === id);

  const navigate = useNavigate();

  return (
    <UserItemWrapper
      onClick={() => {
        navigate(`/chatRoom/${id}`);
      }}
    >
      <UserImgWrapper guest={user.user_id === 1}>
        <UserImg src={user.user_img} />
      </UserImgWrapper>
      <UserInfoWrapper>
        <UserName>{user.user_name}</UserName>
        <Message>{myChats[myChats.length - 1].chat_content}</Message>
      </UserInfoWrapper>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.7rem;

  cursor: pointer;
`;

const UserImgWrapper = styled.div<{ guest: boolean }>`
  width: ${(props) => (props.guest ? '4rem' : '3rem')};
  height: ${(props) => (props.guest ? '4rem' : '3rem')};

  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Message = styled.div`
  font-size: 0.7rem;
  color: gray;
`;

export default ChatRoomItem;
