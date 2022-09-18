import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Usuario from './Usuario';
import Sobre from './Sobre';


export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home Page</Link></p>
    <p><Link to='/Usuario'>Usuario</Link></p>
    <p><Link to='/Sobre'>Sobre a Página</Link></p>

    </header>
    <main>
        <Switch>
          <Route path='/Usuario' component= {Usuario}/>
          <Route path='/Sobre' component= {Sobre}/>
        </Switch>
      </main></>
  );
}

