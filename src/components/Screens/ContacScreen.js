//vendor
import React from 'react'

//styles
import '../../styles/contacscreen.css'
//emailjs library
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_tc0QddW6oeqCEOXheAvtV");



export const ContacScreen = ( { history } ) => {

    function sendEmail(e) {
        e.preventDefault()
    
        emailjs.sendForm('service_5aa892f', 'template_dm0zgl8', e.target, 'user_tc0QddW6oeqCEOXheAvtV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

      const handLeClick = ( ) => {
       
          setTimeout(() => {
              
            history.push("/thanks");
          }, 1000);
      }


    return (
        <>
            <div className="contacscreen">
                <div className="contacscreen__title">
                    Contacto
                </div>

                <div className="responsive">
                    <div className="contacscreen__img">
                        <img src="/remastered/assets/Helio.jpg"></img>
                    </div>

                    <div className="contacscreen__imgtext">
                        Helio Soto Arevalo
                    </div>
                </div>

                <form 
                className="contacscreen__form" 
                onSubmit={ sendEmail }
                method="POST" 
                >
                    <input 
                    name="the__name" 
                    placeholder="Nombre y Apellido*"
                    className="contacscreen__form--name formInput"
                    />
                
                    <input 
                    name="the__phone"
                    placeholder="Número de teléfono"
                    className="contacscreen__form--lastname formInput">
                    </input>

                    <input 
                    name="the__email" 
                    placeholder="e-Mail*"
                    type="email"
                    className="contacscreen__form--email formInput"
                    >
                    </input>
                    
                    <textarea 
                    name="the__message"
                    placeholder="Escribe aquí tu mensaje*"
                    className="contacscreen__form--text formText">
                    </textarea>

                    <input
                    onClick={ handLeClick }
                    className="contacscreen__form--button"
                    type="submit"
                    value="Enviar"
                    >
                    </input>

                </form>

            </div>
        </>
    )
}
