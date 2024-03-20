import React, { useState } from "react";
import app1 from "../../assets/app1.svg";
import app from "../../assets/app.svg";
import bigmac from "../../assets/bigmac.svg";
import logo from "../../assets/logo.svg";
import bigmac2 from "../../assets/bigmac2.png";
import batata from "../../assets/batata.svg";
import batata2 from "../../assets/batata2.svg";
import sorvete from "../../assets/sorvete.svg";
import sorvete2 from "../../assets/sorvete2.png";
import * as S from "./header_style";

export default function Header() {
  const [imagem, setImagem] = useState(bigmac);

  const trocarImagem = (novaImagem) => {
    setImagem(novaImagem);
  };

  return (
    <S.Header>
      <section>
        <div>
          <img src={logo} alt="" />
        </div>
        <section>
          <div>
            <S.button1>
              <img src={app} alt="" />
              Baixe o App
            </S.button1>
          </div>
          <div>
            <S.button2>
              Peça seu méqui
              <img src={app1} alt="" />
            </S.button2>
          </div>
        </section>
      </section>
      <S.wrapper>
        <S.Container>
          <div>
            <img src={imagem} alt="" />
          </div>
          <S.block>
            <div>
              <h2>BATEU AQUELA </h2>
              <h2>
                <span>#FOME</span> DE <span>MÉQUI</span>?
              </h2>
            </div>
          </S.block>
        </S.Container>
        <S.trocarImagem>
          <div onClick={() => trocarImagem(bigmac)}>
            <img src={bigmac2} alt="" />
          </div>
          <div onClick={() => trocarImagem(batata2)}>
            <img src={batata} alt="" />
          </div>
          <div onClick={() => trocarImagem(sorvete2)}>
            <img src={sorvete} alt="" />
          </div>
        </S.trocarImagem>
      </S.wrapper>
    </S.Header>
  );
}
