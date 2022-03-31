import React from 'react';
import Imagenes from '../Components/Imagenes'
import Card from 'react-bootstrap/Card'

function Detalle() {
  
    
 const styles ={

    diseño: {
        fontSize :   "30px",
        top:         "70px",
        color:       "black",
        textAlign :  "center",
        margin:      "auto",
		    display:    "block",
        width:      "55rem",

    }



 }
  
  


 
    return (

        <div>

<Card style={styles.diseño} >
  <Card.Body >
    <Card.Title style={styles.diseño} >Filet de Ternera Grillada</Card.Title>
    <Card.Img variant="top" src={Imagenes.img1} />
    
    <Card.Text>
    "Filet de ternera grillada, pure de coliflor, pesto de cavolo, hongos y panceta"
    </Card.Text>
  
    precio: $2700
  </Card.Body>
</Card>



<Card style={styles.diseño}>
  <Card.Body>
    <Card.Title style={styles.diseño}>"Bondiola de Cerdo ahumada"</Card.Title>
    <Card.Img variant="top" src={Imagenes.img2} />
    <Card.Text>
    "Ketchup de zanahorias y cebolla colorada dulce"
    </Card.Text>
    precio: $2500
  </Card.Body>
</Card>



<Card style={styles.diseño}>
  <Card.Body>
    <Card.Title style={styles.diseño}>"Ñoquis de Camote"</Card.Title>
    <Card.Img variant="top" src={Imagenes.img5} />
    <Card.Text>
    "Ñoquis de Camote crocantes, salteados con brócoli arvejas y jamón crudo"
    </Card.Text>
    precio: $980
  </Card.Body>
</Card>
        
        
<Card style={styles.diseño}>
  <Card.Body>
    <Card.Title style={styles.diseño} >"Salmon marinado con vegetales"</Card.Title>
    <Card.Img variant="top" src={Imagenes.img7} />
    <Card.Text>
    "Frutos del Rio, marinado al limon y puesto al plato con vegetales marinados"
    </Card.Text>
    $2100
  </Card.Body>
</Card>
        
<Card style={styles.diseño} >
  <Card.Body>
    <Card.Title style={styles.diseño}> "Hamburguesa triple con queso azul y papas"</Card.Title>
    <Card.Img variant="top" src={Imagenes.img3} />
    <Card.Text>
    Hamburguesa de carne de Kobe, creacion de nuestro chef
    </Card.Text>
    $1450
  </Card.Body>
</Card>
        

<Card style={styles.diseño} >
  <Card.Body>
    <Card.Title style={styles.diseño}>" Lasagna rellena de carne y mozzarella" </Card.Title>
    <Card.Img variant="top" src={Imagenes.img4} />
    <Card.Text>
   Especialidad de nuestra casa, lasagña con quezzo muzzarela y salsa bolognesa
    </Card.Text>
    $1200
  </Card.Body>
</Card>


<Card style={styles.diseño} >
  <Card.Body>
    <Card.Title style={styles.diseño}> "Sorrentinos de Salmón con crema de limón"</Card.Title>
    <Card.Img variant="top" src={Imagenes.img6} />
    <Card.Text>
   Otra especialidad de la casa
    </Card.Text>
    $1300
  </Card.Body>
</Card>




         
        </div>
    );
  
  
}

export default Detalle;
