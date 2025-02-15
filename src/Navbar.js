import React from "react";
import styled from "styled-components";
import navbarstyle from './navbar.module.css';

const CartCount = styled.div`
    color: white;
    position: relative;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
    width: 20px;
    padding: 0px 0px 3px 9px;
    height: 20px;
    left: -27px;
    margin-top: 9px;  
    visibility: ${(props)=>props.show>0?"visible":"hidden"};
`;

function Navbar(props){
    
        const {cartCount} = props;
        return(
            <div className={navbarstyle.navbar}>
                <h2 className={navbarstyle.title}>MOVIE-APP</h2>
                <div className={navbarstyle.cart}>
                    <img alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/4647/4647563.png" className={navbarstyle.cartIcon}></img>
                    <CartCount show = {cartCount}>{cartCount}</CartCount>
                </div>
            </div>
        )
    
}
export default Navbar;