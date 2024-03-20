import React from 'react'

import * as S from "./main_style";

export default function Card({imagem, texto }) {
    return (

            <S.Card>
                <img src={imagem} alt="" />
                <p>{texto}</p>
                <button>Clique aqui</button>
            </S.Card>


       
    );
}
