import { styled } from "styled-components";
import background from './assets/zap.png'

export const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #E2e1DE;
`;

export const Background = styled.div`
  background-color: #00A884;
  height: 20%;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const ChatContainer = styled.div`
  width: 95%;
  max-width: 1800px;
  height: 95%;
  background-color: #fff;
  position: absolute;
  display: flex;
`;

export const ChatContacts = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid #e6e6e6;
`;

export const ChatOptions = styled.div`
  width: 100%;
  height: 80px;
  background-color: #F0F2F5;
`;

export const ChatItem = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #F0F2F5;
  border-bottom: 1px solid #F0F2F5;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
`;

export const TitleChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow-x: hidden;
`;

export const TitleMessage = styled.span`
  font-size: 18px;
`;

export const LastMessage = styled.span`
  color: #808080;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChatMessages = styled.div`
  flex: 1;
  background-image: url(${background});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatMessagesArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 30px 0 30px;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
    border-radius: 20px;
  }
`;

export const MessageContainer = styled.div <{myMessage:boolean}>`
  max-width: 100%;
  display: flex;
  justify-content: ${({myMessage}) => myMessage ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.span <{myMessage:boolean}>`
  flex-wrap: wrap;
  max-width: 40%;
  padding: 8px;
  background-color: ${({ myMessage }) => (myMessage ? '#007bff' : '#f1f1f1')};
  color: ${({ myMessage }) => (myMessage ? '#fff' : '#333')};
  border-radius: 8px;
  margin-bottom: 5px;
  position: relative;
  word-break: break-word;
`;

export const ChatInputArea = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ChatInput = styled.textarea`
  width: 90%;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  padding-top: 5px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  resize: none; 
  overflow-y: hidden; 
  transition: height 0.3s ease;
 
`;

export const SendMessageContainer = styled.div`

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const SendMessage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const LoginContainer = styled.div`

`;

export const LoginContent = styled.div`

`;

export const UserNameInput = styled.input`

`;

export const JoinButton = styled.button`

`;