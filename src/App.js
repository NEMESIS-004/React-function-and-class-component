import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieList from './movielist';
import { movie } from "./moviedata";

class App extends React.Component{

    constructor(){
      super();
      this.state = {
          movies: movie,
          cartCount:0
      };
  }

  addstars=(movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].stars<5)movies[mid].stars+=0.5;
      this.setState({
          movies:movies
      });
  }
  removestars=(movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].stars>0)movies[mid].stars-=0.5;
      this.setState({
          movies:movies
      });
  }

  cartHandle = (movie) =>{
      let {movies,cartCount} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].inCart){
        cartCount = cartCount-1;
      }else{
        cartCount=cartCount+1;
      }
      movies[mid].inCart = !movies[mid].inCart;
      this.setState({
          movies,
          cartCount
      });
  }
  favHandle = (movie) =>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      movies[mid].isfav = !movies[mid].isfav;
      this.setState({
          movies:movies
      });
  }

  render(){
    const {movies,cartCount} = this.state;
    return (
      <>
        <Navbar  cartCount={cartCount}/>
        <MovieList movies = {movies} 
            addstars = {this.addstars} 
            removestars = {this.removestars} 
            cartHandle = {this.cartHandle} 
            favHandle = {this.favHandle}/>
      </>
    );
  
  }
}
  

export default App;
