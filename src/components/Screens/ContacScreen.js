//vendor
import React from 'react'

//styles
import '../../styles/contacscreen.css'


export const ContacScreen = () => {
    return (
        <div className="contacscreen">
            <div className="contacscreen__title">
                Contactame
            </div>
            <div className="contacscreen__img">
                <img src="/remastered/assets/Helio.jpg"></img>
            </div>

            <div className="contacscreen__imgtext">
                Helio Soto Arevalo
            </div>
            <form 
            className="contacscreen__form"
            method="get" 
            action="mailto:heliosoto17@hotmail.com" 
            enctype="text/plain">

                <input 
                placeholder="Nombre y Apellido*"
                className="contacscreen__form--name formInput">
                </input>
            
                <input 
                placeholder="Número de teléfono"
                className="contacscreen__form--lastname formInput">
                </input>

                <input 
                placeholder="Mail*"
                className="contacscreen__form--email formInput">
                </input>
                
                <input 
                placeholder="Escribe aquí tu mensaje*"
                className="contacscreen__form--text formText">
                </input>

                <input
                className="contacscreen__form--button"
                type="submit"
                value="Enviar"
                >
                
                </input>

            </form>

        </div>
    )
}
