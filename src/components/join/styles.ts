import styled from "styled-components";

export const JoinContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const JoinContent = styled.div`
    width: 50%;
    height: 50%;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const    NameContainer = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    input{
        width: 200px;
        height: auto;
        border-radius: 40px;
        cursor: pointer;
    }
`;
export const ButtonContainer = styled.div`
    button{
        width:150px;
        border-radius: 40px;
        cursor: pointer;
    }
`;