import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';
import { User } from '../../interfaces/interfaces';
import { chatState } from '../../recoil/recoil';

const ChatRoomItem = (user: User) => {
  const chats = useRecoilValue(chatState);
  const myChats = chats.filter((chat) => chat.user_id === user.user_id);
  console.log(myChats[0]);

  const navigate = useNavigate();

  const id = user.user_id;

  return (
    <UserItemWrapper
      onClick={() => {
        navigate(`/chatRoom/${id}`);
      }}
    >
      <UserImgWrapper isSelected={user.isSelected}>
        <UserImg src={user.user_img} />
      </UserImgWrapper>
      <UserInfoWrapper>
        <UserName>{user.user_name}</UserName>
        <Message>{myChats[0].chat_content}</Message>
      </UserInfoWrapper>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.7rem;
`;

const UserImgWrapper = styled.div<{ isSelected: boolean }>`
  width: ${(props) => (props.isSelected ? '4rem' : '3rem')};
  height: ${(props) => (props.isSelected ? '4rem' : '3rem')};

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
  gap: 0.3rem;
`;

const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Message = styled.div`
  font-size: 0.85rem;
  color: gray;
`;

export default ChatRoomItem;
