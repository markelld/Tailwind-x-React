import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom"
import Layout from "./components/layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Photography from "./screens/Photography";

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home/>
          </Layout>
        </Route>
        <Route path="/about">
          <Layout>
            <About/>
          </Layout>
        </Route>
        <Route path="/contact">
          <Layout>
            <Contact/>
          </Layout>
        </Route>
        <Route path="/photography">
          <Layout>
            <Photography/>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
        
  


      
