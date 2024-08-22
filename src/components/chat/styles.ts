import styled from "styled-components";
import imgzap from '../../assets/zap.png'

export const ChatContainer = styled.div`
    width: 98%;
    max-width: 1800px;
    height: 95%;
    background-color: #fff;
    position: absolute;
    display: flex;
`;


//informação e contatos 

export const ChatContacts = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #e6e6ee;

`;
export const ChatOptions = styled.div`
    width: 100%;
    height: 80px;
    background-color: #f0f2f5;
`;

export const ChatItem = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ImageProfile = styled.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
`;

export const TitleChat = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const TitleMessage = styled.span`
    font-size: 18px;
`;

export const LastMessage = styled.span`
    color: #808080;
`;


//area das mensagens

export const ChatContent = styled.div`
    flex: 1;
    background-image: url(${imgzap});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const UsersChta = styled.span`
    color: #808080;
`;

export const ChatMessages = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
    border-radius: 20px;
  }

`;

export const MessagesContainer = styled.div <{userMessage:boolean}>`
  padding: 10px 25px;
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  justify-content: ${({userMessage}) => userMessage ? 'flex-end' : 'flex-start'};
`;

export const SpanMessages = styled.span<{userMessage:boolean}>`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  max-width: 40%;
  padding: 8px;
  background-color: ${({ userMessage }) => (userMessage ? '#99d6ff' : '#ffad99')};
  color: ${({ userMessage }) => (userMessage ? '#006600' : '#333')};
  border-radius: 8px;
  margin-bottom: 5px;
  position: relative;
  word-break: break-word;


  b{
    color: ${({ userMessage }) => (userMessage ? '#0000ff' : '#ff0000')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border: 8px solid transparent;
    border-top-color: ${({ userMessage }) => (userMessage ? '#0000ff' : '#ff0000')};
    z-index: 1;
  }

  ${({ userMessage }) => userMessage? 
        `
            border-top-right-radius: 0;
            left: 0;
            &::before {
             left: 100%;
             border-left-width: 0;
            }
        `
    :   `
            border-top-left-radius: 0;
            right: 0;
            &::before {
             right: 100%;
             border-right-width: 0;
            }
        `
    }
`;

export const MessagesInputContaine = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f0f2f5;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

export const MessagesInput = styled.input`
    width: 90%;
    border-color: #fff;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 4px;
    font-size: 16px;
`;

export const SendImg = styled.img`
    width: 40px;
    height: auto;
    cursor: pointer;
`;



