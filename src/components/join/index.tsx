import { useContext } from "react";
import { ButtonContainer, JoinContainer, JoinContent, NameContainer } from "./styles";
import { UserContext } from "../../contexts/context";
import socket from 'socket.io-client'

const io = socket('http://localhost:4000')


function JoinComponent() {
    const {joinHandle, setJoinHandle, name, setName} = useContext(UserContext);

    const handleJoin = () => {
        if(name) {
          io.emit("join", name);
          setJoinHandle(!joinHandle);
        }
    }

    return(
        <JoinContainer>
            <JoinContent>
                <NameContainer>
                    <span><b>Digite o seu nome:</b></span>
                    <input 
                     value={name} 
                     onChange={(e) => setName(e.target.value)}
                     onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            handleJoin()
                        }
                        if (e.key === " ") {
                            e.preventDefault();
                        }
                     }}
                    />
                </NameContainer>

                <ButtonContainer>
                    <button 
                        onClick={() => handleJoin()}
                    >
                        <b>Entrar</b>
                    </button>
                </ButtonContainer>
            </JoinContent>
        </JoinContainer>
    )
}

export default JoinComponent;