import styled from "styled-components";


export const Container = styled.div`
    & h2{
        margin-top: 10px;
    }
`;

export const InputField = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px auto;
    
    & input{
        width: 100%;
        height: 100%;
        background-color: transparent !important;
        outline: none;
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 40px;
        font-size: 16px;
        padding: 20px;
        padding-right: 55px;
    }
    & svg{
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
    }
`;

export const RecallForget = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px; 
    margin: -10px 0 15px;
  
    & input{
        margin-right: 5px ;
    }   

    & a{
        font-weight: bold;
        text-decoration: none;
  
    }
    & a:hover{
        text-decoration: underline;
    }
`;

export const BtnLoginRegister = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    
    & button{
        padding: 15px 40px ;
        background-color: ${props => props.theme.colors.button};
        border: none;
        border-radius: 40px;
        color: ${props => props.theme.colors.buttonText};
        font-size: 20px;
        cursor: pointer;
    }
    & button:hover{
        background-color: ${props => props.theme.colors.buttonHover};
    }
`;