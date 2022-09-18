import React from 'react';
import { Link } from "react-router-dom";

export default function Sobre(){
   return (
       <div>
           <h1>Informações da página</h1>
           <p>Esta página é um teste para aula de react</p>          
           <Link to="/">retornar a página inicial</Link>
       </div>
   );
}