import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from './components';
import Home from './components/Home';
import AboutMe from './components/AboutMe/index';
import ContactMe from './components/ContactMe/index';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
        <>
          <Home />
          <AboutMe />
          <ContactMe />
        </>
    </Router>
  );
}

export default App;
