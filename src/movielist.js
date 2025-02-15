import React from "react";
import MovieCard from "./moviecard";


class MovieList extends React.Component{
    

    render(){
        const {movies, addstars, removestars, cartHandle, favHandle} = this.props;
        return(
            
            <>
            {movies.map((movie)=><MovieCard movies = {movie} 
            addstars = {addstars} 
            removestars = {removestars} 
            cartHandle = {cartHandle} 
            favHandle = {favHandle} key={movie.id}/>)}
            
            </>
        );
    }
}
export default MovieList;