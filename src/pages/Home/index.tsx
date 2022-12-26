import { CardNumberContainer, CreditCardContainer, FormContainer, HomeContainer, OtherInfosContainer } from "./styles";
import imgCreditCard from "../../assets/credit-card.jpg"
import { useState } from "react";
export function Home(){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expireDate, setExpireDate] = useState('');
    function handleSetName(name: string){
        setName(name)
    }
    return (
        
        <HomeContainer>
            <FormContainer>
                <h1>Preencha os dados do cartão de crédito</h1>
                <label>
                    Nome Completo
                </label>
                <input type="text" onChange={(e) => setName(e.target.value) } value = {name}/>

                <label>
                    Número do cartão
                </label>
                <input type="number" onChange={(e) => setNumber(e.target.value) } value = {number} />
                
                <label>
                    Data de validade
                </label>
                <input type="date" onChange={(e) => setExpireDate(e.target.value) } value = {expireDate}/>

                <label>
                    Código de segurança
                </label>
                <input type="number" onChange={(e) => setSecurityCode(e.target.value) } value = {securityCode} />

                <button>Cadastrar cartão</button>
            </FormContainer>
            <CreditCardContainer>
                <img src={imgCreditCard} alt="" />
                <div>
                    <CardNumberContainer>
                        <label htmlFor="">Card number</label>
                        <span>{number}</span>
                    </CardNumberContainer>
                    <OtherInfosContainer>
                        <div>
                            <label htmlFor="">Nome completo</label>
                            <span>{name}</span>
                        </div>
                        <div>
                            <label htmlFor="">Valid Thru</label>
                            <span>{expireDate}</span>
                        </div>
                        <div>
                            <label htmlFor="">Security Code</label>
                            <span>{securityCode}</span>
                        </div>
                    </OtherInfosContainer>
                </div>
            </CreditCardContainer>
        </HomeContainer>
    )
}