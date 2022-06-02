import React from "react";
import '../stylesheets/textos.css';
import MenuOpciones from './menu';

//crear la funcion
const textos = ( { nombre, subtitulo, descripcion } ) => {
  return (
      <div className='contenedor-texto'>
        <header>
          <h1 className= 'titulo'> <strong> {nombre} </strong>  </h1>
          <MenuOpciones> opciones </MenuOpciones>
        </header>

        <h1 className='subtitulo'> {subtitulo} </h1>
        <p className='description'> {descripcion} </p>
      </div>
  );
};

export default textos;