import React from 'react';
import { Link } from "react-router-dom";

export default function Usuario(){
   return (
       <div>
           <h2>Nome do Usuário</h2>
           <p>Gustavo Xavier</p>
           <Link to="/">retornar a página inicial</Link>
       </div>
   );
}
