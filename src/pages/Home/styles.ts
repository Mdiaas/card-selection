import styled from "styled-components";

export const HomeContainer = styled.main`
    width:100%;
    height:100vh;

    display:grid;
    grid-template-columns: repeat(2, 1fr);
`

export const FormContainer = styled.form`
    background:#071422;
    width:75%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    padding: 5rem;
    justify-content:center;
    h1{
        text-align:center;
        font-size: 1.5rem;
        margin-bottom:2rem;
    }
    label{
        font-weight:bold;
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;
    }
    input{
        width:100%;
        border:0;
        padding: 1rem 0.5rem;
        color: #fff;
        background:#000;
        border-radius: 6px;
    }
    button{
        color: #C4D4E3;
        background: #3294f8;
        border: 0;
        border-radius: 6px;
        padding: 1rem 0.5rem;
        width:100%;
        margin-top: 1rem;
        cursor:pointer;
        &:hover{
            background: #1C2F41;

            transition:  background-color 0.25s
        }
    }
`

export const CreditCardContainer = styled.div`
    color: #000;
    position: relative;
    text-align: center;
    img{
        height: 100%;
        width: 100%;
    }
    > div{
        position: absolute;
        bottom: 25%;
        left: 10%;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;

    }
`

export const CardNumberContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
`

export const OtherInfosContainer = styled.div`
    display:flex;
    align-items:flex-start;
    gap: 1rem;

    label{
        display:block;
    }
    > div{
        text-align:left;
    }
`