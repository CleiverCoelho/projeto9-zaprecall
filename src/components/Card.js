import styled from "styled-components"
import setaPlay from "../assets/seta_play.png"
import iconeCerto from "../assets/icone_certo.png"
import iconeErro from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import setaVirar from "../assets/seta_virar.png"

import React from "react"

export default function Card({question, answer, index, cartasRespondidas, setCartasRespondidas}){

    const [respondida, setRespondida] = React.useState(false);
    const [perguntaRevelada, setPerguntaRevelada] = React.useState(false);
    const [respostaRevelada, setRespostaRevelada] = React.useState(false);
    const [resposta, setResposta] = React.useState("");

    const indice = index;

    function revelarPergunta(){
        setPerguntaRevelada(true);
    }
    function revelarResposta(){
        setPerguntaRevelada(false);
        setRespostaRevelada(true);
    }

    return (
        <>
            <Pergunta 
                respondida={respondida}
                perguntaRevelada={perguntaRevelada}
                respostaRevelada={respostaRevelada}
            >
                <p>Pergunta {index + 1}</p>
                <img onClick={revelarPergunta} src={setaPlay} alt="setaPlay"/>
            </Pergunta>
            <FrontFace perguntaRevelada={perguntaRevelada}>
                <p>{question}</p>
                <img onClick={revelarResposta} src={setaVirar} alt="setaVirar"/>
            </FrontFace>
            <BackFace respostaRevelada={respostaRevelada}>
                <p>{answer}</p>
                <Botoes>
                    <button>Não lembrei</button>
                    <button>quase não lembrei</button>
                    <button>Zap!</button>
                </Botoes>
            </BackFace>
        </>
    )
}

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        width: 86px;
        height: 38px;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        background: #2FBE34;
    }
`

const FrontFace = styled.div`

    width: 300px;
    height: 131px;
    background: #FFFFD4;
    display: ${(props) => props.perguntaRevelada ? "flex" : "none"};
    font-family: 'Righteous', cursive;
    font-size: 16px;
    justify-content: flex-start;
    padding: 10px;
    margin-top: 10px;

    position: relative;

    p{
        color: #333333;
    }
    img{
        width: 30px;
        height: 20px;
        position: absolute;
        top: 100px;
        left: 265px;
    }
`
const Pergunta = styled.div`
    display: ${(props) => (props.perguntaRevelada || props.respostaRevelada) ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    font-family: 'Righteous', cursive;
    font-size: 16px;
    width: 300px;
    height: 65px;

    margin-top: 10px;
    align-items: center;
    padding: 10px;

    text-decoration: ${(props) => props.respondida ? "line-through" : "none"} ;
`

const BackFace = styled.div`
    width: 300px;
    height: 131px;
    background: #FFFFD4;
    display: ${(props) => props.respostaRevelada ? "flex" : "none"};
    flex-direction: column;
    font-family: 'Righteous', cursive;
    font-size: 16px;
    padding: 10px;

    margin-top: 10px;
    p{
        color: #333333;
    }
`
