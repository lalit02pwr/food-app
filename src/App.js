import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import Favorites from './pages/favorites';
import Dashboard from './pages/dashboard';
import Details from './pages/details';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import data from './data/data.json'

class App extends React.Component {
  
  state={
    activeRecipe: {},
    cartCount: 0,
    
  }
  addCartCount(count){
    this.setState({cartCount:this.state.cartCount+1})
  }

  setActiveRecipe(recipe){
    console.log("receipe", recipe);
    this.setState({activeRecipe:recipe})
  }
  render(){

    return (
      <Router>
        <div className="App">
          <Header></Header>       
          <Link to="/">Home</Link><br />
          <Route exact path="/" component={ (props)=> <Favorites {...props} cartCount={this.state.cartCount} setActiveRecipe={this.setActiveRecipe.bind(this)} data={data.recipes}></Favorites>}></Route>
          <Route exact path="/" component={(props)=> <Dashboard {...props} addCartCount={this.addCartCount.bind(this)} categories={data.categories} recipes={data.recipes}></Dashboard>}></Route>
          <Route path="/product" component = {(props)=> <Details{...props} cartItem={this.state.cartItem}  recipe={this.state.activeRecipe}></Details>} ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
