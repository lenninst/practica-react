import React from "react";
import '../stylesheets/ImagenBackground.css';
import Textos from "./textos";
import Canciones from './youtube';

const ImagenBackground = ({ guitar }) => {
  return (
      <div className="imagen-fondo">
        <div className="titulo">
          <Textos
              nombre = 'lenin'
              subtitulo = 'Lenin Stalings Music'
              descripcion = 'Este es mi top de la semana'
          />
        </div>
        <div className='canciones-lista'>
          <Canciones CancionesLink="https://www.youtube.com/watch?v=EVSqUl-FtCI" />
          <Canciones CancionesLink="https://www.youtube.com/watch?v=9_gkpYORQLU" />
          <Canciones CancionesLink="https://www.youtube.com/watch?v=D9G1VOjN_84&list=RDBhbchgBlUPI&index=4" />
          <Canciones CancionesLink="https://www.youtube.com/watch?v=l-PQLrGKhUs" />
          <Canciones CancionesLink="https://www.youtube.com/watch?v=DdnADaV2g7c" />
          <Canciones CancionesLink="https://www.youtube.com/watch?v=GWXITM7gVqY" />

        </div>

      </div>
  );
};
export default ImagenBackground;