import React from 'react';
import { Nav } from './components/Nav'
import './App.css';
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { EnrollPage } from "./views/EnrollPage";
import { PhotoPage } from "./views/PhotoPage";
import { UpdatePhotoPage } from "./views/UpdatePhotoPage";
import { Link, HashRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <div className="app">

        <div className="nav">
          <Nav />
        </div>
        <div className="main">
          <Switch>
            <Route path="/enroll" component={EnrollPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/photoPage" component={PhotoPage} />
            <Route path="/updataPhoto" component={UpdatePhotoPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
        <div className="footer">

        </div>
      </div>
    </HashRouter>
  );
}

export default App;
