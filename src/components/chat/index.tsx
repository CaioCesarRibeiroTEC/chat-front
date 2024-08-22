import { ChatItem, ChatOptions, ChatContainer, ImageProfile, LastMessage, TitleChat, TitleMessage, ChatContacts, ChatContent, UsersChta, ChatMessages, MessagesInputContaine, MessagesInput, SendImg, SpanMessages, MessagesContainer } from "./styles";
import imgChat from '../../assets/profissao-programador.jpg';
import sendImg from '../../assets/send.png';
import {  useContext, useEffect, useRef } from "react";
import socket from 'socket.io-client'
import { UserContext } from "../../contexts/context";
import JoinComponent from "../join";

const io = socket('http://localhost:4000')



function ChatComponent() {
   
    const {
        name, users, setUsers, joinHandle, message, setMessage,
        messages, setMessages,nameID, setNameID
    } = useContext(UserContext)
   
    const messageContainer = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
        io.on("users", (users) => {
          setUsers(users);
        });
        
        io.on("message", (message) => setMessages((messages:any) => [...messages, message]));
        io.on("connect", () => setNameID(io.id));
    }, [])

    useEffect(() => {
        messageContainer.current?.scrollTo(
          0,
          messageContainer.current.scrollHeight
        );
    }, [messages]);

    

    const handleMessage = () => {
        if(message.trim()) {
          io.emit("message", {message, name});
          setMessage('');
        }
    }

    return(
        <>{joinHandle ?
            <JoinComponent />
        :
            <ChatContainer>

                <ChatContacts>
                    <ChatOptions></ChatOptions>
                    <ChatItem>
                        <ImageProfile src={imgChat} alt="" />
                        <TitleChat>
                            <TitleMessage>NetWorking Profição Programador</TitleMessage>
                            <LastMessage>{messages.length? `${messages[messages.length - 1].name}: ${messages[messages.length - 1].message}` : ''}</LastMessage>
                        </TitleChat>
                    </ChatItem>

                    

                </ChatContacts>



                <ChatContent>

                    <ChatOptions>
                        <ChatItem>
                            <ImageProfile src={imgChat} alt="" />
                            <TitleChat>
                                <TitleMessage>NetWorking Profição Programador</TitleMessage>
                                <UsersChta>{
                                    users.map((user:any, index: any) => (
                                        <span>
                                            {user.name}{index + 1 < users.length? ', ' : ''}
                                        </span>
                                    ))
                                }</UsersChta>
                            </TitleChat>
                        </ChatItem>
                    </ChatOptions>

                    <ChatMessages ref={messageContainer}>

                        {messages.map((message:any, index:number) => (
                            <MessagesContainer
                             key={index}
                             userMessage={message.userID === nameID}
                            >
                                <SpanMessages  userMessage={message.userID === nameID}>
                                    <b>{message.name? `${message.name}: ` : ''}</b> {message.message}
                                </SpanMessages>


                            </MessagesContainer>
                        ))}
                    </ChatMessages>

                    <MessagesInputContaine>
                        <MessagesInput  
                         placeholder="Mensagem"
                         value={message}
                         onChange={
                            (e) => setMessage(e.target.value)
                         }
                         onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleMessage();
                            }
                          }}
                        />
                        <SendImg 
                        src={sendImg}
                        onClick={() => handleMessage()} 
                        
                        />
                    </MessagesInputContaine>
                </ChatContent>
            </ChatContainer>
        }</>
    )
}

export default ChatComponent;