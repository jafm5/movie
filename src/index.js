import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));

/*     const titulo= props.titulo;
    const contenido = props.contenido;
    es lo mismo de abajo pero no simplificado */
/* function Componente(props){


    const {titulo, contenido}= props;
    return(
        <div className='contenedor'>
            <h1>{titulo}</h1>
            <div>{contenido}</div>
        </div>
    );
} */

root.render(

   <App/>
    
);


