import React from "react";


import Card from "./Card";
import * as S from "./main_style";
import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.png"
import banner3 from "../../assets/banner3.png"

export default function Main() {
  return (
    <S.Main>
        <div>
          <h1>Promoção</h1>
        </div>
      <S.Container>

        <Card
          imagem={banner1}
          texto={"Que tal um #MéquiNoSofá?"}
          button={""}
        />

        <Card
          imagem={banner2}
          texto={"venha conhecer nossa nova loja"}
          button={""}
        />


        <Card
          imagem={banner3}
          texto={"Confira as medidas que o Méqui adotou!"}
          button={""}
        />

      </S.Container>

    </S.Main>
  );

}
