
import {Link} from "react-router-dom";
import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'




const Comida = ({comida,cart,setCart,comidas,setComidas}) => {
    const {nombre,precio,id,descripcion,sku} = comida;
 
    const addComida = (id) =>{ 
        const  comida = comidas.filter ((comida) =>comida.id === id);
        setCart ([...cart, ...comida])
    };

    const delComida = (id) => {
        const comidas = cart.filter (comida => comida.id ==! id)
        setCart(comidas)
    }
 
    

    const styles ={

        diseño: {
            fontSize : "10px",
            top: " 40px",
            color: "black",
            textAlign : "left",
            margin:" 1em auto",
            right : "20vw",
            width: "40rem"
    
        }  }
      



return(

    <div>

<Card style={styles.diseño} ><br/>
  <Card.Body style={styles.diseño}>
    <Card.Title>{nombre}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">precio ${precio} </Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted"> Ref : {sku} </Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted"> Descripcion : {descripcion} </Card.Subtitle>
    <Card.Text>
    
    
    </Card.Text>
    <Button  type="button" variant="dark"  as={Link} to ={'/detalle/'+comida.id}  >
        Ver Detalle            
              
           
               </Button>




               {comidas ? ( 
      ( 

      
       <Button type="button" variant="success"   onClick ={()=> addComida(id)} >
              Agregar a mi Pedido
             </Button>
     
  

        ) 
        )
         : (
             <div>

           <Button type="button" variant="success" onClick ={()=> delComida(id)} >
              Confirmar
             </Button>


             <Button type="button" variant="danger" onClick ={()=> delComida(id)} >
              Eliminar
             </Button>

            
        
             </div>
      )}
               



  </Card.Body>
</Card>

      

 





        






    </div>


);

} ;

export default Comida;