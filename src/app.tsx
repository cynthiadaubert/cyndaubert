import React from 'react';
import {Home} from './pages/home';
import { Header } from "./components/header"; 
import { Footer } from "./components/footer";
import {Projects}from './pages/projects';
import {Stack} from './pages/stack';


function App() {

  return (
    <div className="App">
      <Header/><Home />
      <main>
        <Projects/>   
      </main>
      <Stack/><Footer/>
    </div>
  );
}

export default App;