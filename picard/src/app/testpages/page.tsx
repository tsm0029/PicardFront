"use client"
import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, Foo, Bar} from '../signup/page2';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Routes>
            <Route  path="/home" element={<Home/>} />
            <Route  path="/foo" element={<Foo />}  />
            <Route  path="/bar" element={<Bar />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

// render(<App />, document.getElementById('root'));

export default App;