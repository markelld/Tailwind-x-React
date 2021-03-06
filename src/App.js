import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom"
import Layout from "./components/layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import PhotoPage from "./components/PhotoPage";

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
        <Route path="/photopage">
          <Layout>
            <PhotoPage/>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
        
  


      
