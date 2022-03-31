import React from "react";
import Comida from "../Components/Comida";




const styles =  { 

    diseño : {
        
        textAlign: "center",
        bottom: "90px",
        top: "20px",
        right: "50px",
        height: "70px",
        color: "green",
        fontSize: "250%",
        fontFamily: "Garamond",
        backgroundColor: "black",
    }
}



 
 const Cart = ( {cart,setCart}) =>  {



    return (
        <div >


 <br/> <br/> <br/> <br/>
        
  <h2   style={styles.diseño}> Mi Pedido </h2><br/>
    
  {cart.length === 0 ? (<p>  0 </p>) : (cart.map((comida => <Comida key={comida.id}  comida={comida}  cart ={cart} setCart={setCart} / > ))) }
        </div>

 )}


export default Cart;
