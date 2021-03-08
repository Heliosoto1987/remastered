import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navbarcontainer.css'

export const NavBarContainer = () => {

  return (
            <div className="container__left">

                <Link className="container__left--item" to="/home">Inicio <i className="fas fa-home"></i></Link>

                <Link className="container__left--item" to="/photos">Resumen Curricular<i className="fas fa-file"></i></Link>

                <Link className="container__left--proyect" to="/giphy">Proyecto: Giphy <i className="fas fa-search"></i></Link>

                <Link className="container__left--proyect" to="/user">Proyecto: Adivina el numero<i className="fas fa-question"></i></Link>

                <Link className="container__left--proyect" to="/stars">Proyecto: StarWars<i className="fab fa-jedi-order"></i></Link>

                <Link className="container__left--proyect" to="/todoapp">Proyecto: TodoApp<i className="fas fa-list"></i></Link>

                <Link className="container__left--last" to="/login">Cerrar sesion <i className="fas fa-sign-out-alt"></i></Link>

            </div>

  )
}
