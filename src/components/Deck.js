import styled from "styled-components"
import Card from "./Card"
import logoZap from "../assets/logo.png"
import React from "react"

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Deck(){
    const [cartasRespondidas, setCartasRespondidas] = React.useState([]);

    return (
        <DeckStyle>
            <Logo>
                <img src={logoZap} alt="Logo"/>
                ZapRecall
            </Logo>
            
            {cards.map((obj, index) => {
                return (
                    <Card
                        key={index}
                        question={obj.question}
                        answer={obj.answer}
                        index={index}
                        cartasRespondidas={cartasRespondidas}
                        setCartasRespondidas={setCartasRespondidas}
                    >
                    </Card>
                )
            })}
        
        </DeckStyle>
    )
}

const Logo = styled.div`
    img{
        width: 52px;
        height: 60px;
        margin-right: 10px;
    }
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Righteous;
    font-size: 36px;
    color: #FFFFFF;
`

const DeckStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
