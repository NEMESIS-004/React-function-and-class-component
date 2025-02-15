import React from "react";

function MovieCard(props){
    
        const {title,plot,rating,price,img,stars,isfav,inCart} = props.movies;
        return(
            <div className = "movie-card">
                <div className="left">
                    <img alt = "poster" src={img}></img>
                </div>
                <div className="right">
                    <div className="movie-title"><h1>{title}</h1></div>
                    <div className="movie-plot">{plot}</div>
                    <div className="price"><h3>Rs.{price}</h3></div>
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-count">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" className="add-star" onClick={()=>{props.addstars(props.movies)}}></img>
                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"></img>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" className="remove-star" onClick={()=>{props.removestars(props.movies)}}></img>
                            <span>{stars}</span>
                            </div>
                        <div className="buttons">
                        {!isfav?<button className="fav-btn" onClick={()=>{props.favHandle(props.movies)}}>Add to favourite</button>:
                        <button className="remove-fav-btn" onClick={()=>{props.favHandle(props.movies)}}>Remove from favourite</button>}
                        <button className={!inCart?"cart-btn":"remove-cart-btn"} onClick={()=>{props.cartHandle(props.movies)}}>{!inCart?"Add to cart":"Remove from cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default MovieCard;