import React from 'react'



import logo2 from "../../assets/logo2.png"
import play from "../../assets/play.png"
import appstory from "../../assets/appstory.png"
import * as S from "./footer_style"

export default function Footer() {
    return (

        <S.Footer>
            <div>
                <img src={logo2} alt="" />
                <p>© McDonald’s 2024</p>
            </div>
            <div>
                <img src={play} alt="" />
                <img src={appstory} alt="" />
            </div>
        </S.Footer>


    )
}
